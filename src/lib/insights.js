import { insights } from "./insights-data";


// Get all insights
export function getAllInsights() {

  return insights.sort(
    (a, b) =>
      new Date(b.date) - new Date(a.date)
  );

}


// Get single insight by slug
export function getInsightBySlug(slug) {

  return insights.find(
    (insight) =>
      insight.slug === slug
  );

}