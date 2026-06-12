const supabase = require('../db/db');

module.exports.list = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*, project_links(type, url)')
    .order('id');

  if (error) throw error;

  return data.map(({ img_path, project_links, ...rest }) => ({
    ...rest,
    imgPath: img_path,
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

  const { img_path, project_links, ...rest } = data;
  return { ...rest, imgPath: img_path, links: project_links };
};
