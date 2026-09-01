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
  const { data, error } = await supabase
    .from('projects')
    .select('*, project_links(type, url)')
    .eq('id', id)
    .single();

  if (error || !data) return null;

  const { img_path, project_date, project_links, ...rest } = data;
  return { ...rest, imgPath: img_path, projectDate: project_date, links: project_links };
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
