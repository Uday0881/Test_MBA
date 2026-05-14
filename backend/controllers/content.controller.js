import siteContent from '../data/siteContent.js';

export function getContent(_req, res) {
  res.json(siteContent);
}
