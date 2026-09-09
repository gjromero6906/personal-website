const supabase = require('../db/db');

module.exports.list = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*, project_links(type, url)')
    .order('project_date', { ascending: false })
    .order('id', { ascending: false });

  if (error) throw error;

  return data.map(({ img_path, project_date, project_links, ...rest }) => ({
    ...rest,
    imgPath: img_path,
    projectDate: project_date,
    links: project_links,
  }));
};

module.exports.find = async (id) => {
  let { data, error } = await supabase
    .from('projects')
    .select('*, project_links(type, url), project_docs(title, summary, url, sort_order)')
    .eq('id', id)
    .order('sort_order', { referencedTable: 'project_docs' })
    .single();

  // A database that hasn't run the project_docs migration yet (e.g.
  // production, before schema.sql/seed.sql are re-applied) doesn't have
  // that table/relationship — degrade to no docs instead of failing the
  // whole project lookup.
  if (error && (error.code === 'PGRST200' || error.code === 'PGRST205' || error.code === '42P01')) {
    ({ data, error } = await supabase
      .from('projects')
      .select('*, project_links(type, url)')
      .eq('id', id)
      .single());
  }

  if (error || !data) return null;

  const { img_path, project_date, project_links, project_docs, ...rest } = data;
  return {
    ...rest,
    imgPath: img_path,
    projectDate: project_date,
    links: project_links,
    docs: project_docs || [],
  };
};

module.exports.listTitles = async () => {
  const { data, error } = await supabase
    .from('titles')
    .select('title');

  if (error) throw error;
  return data.map((r) => r.title);
};

module.exports.listSkills = async () => {
  const { data, error } = await supabase
    .from('skills')
    .select('category, name')
    .order('sort_order')
    .order('id');

  if (error) throw error;

  const grouped = {};
  for (const { category, name } of data) {
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(name);
  }
  return grouped;
};
