// The competition whose sub-pages (topic/process/jury/sites/results) are
// nested under the generic "Competitions" menu item instead of getting
// their own top-level pill: the newest menu-featured competition, or the
// site's true latest competition if none are flagged.
export function getNestedCompetition(data) {
  if (data.menuCompetitions?.length > 0) {
    return data.menuCompetitions[0];
  }
  if (data.competition) {
    return {
      edition: data.competition.edition,
      slug: data.competition.slug,
      hasTopic: !!data.competition.topicBody,
      hasProcess: !!data.competition.processBody,
      hasSites: data.competition.featuredSites?.length > 0,
      hasJury: !!data.competition.juryPresident || data.competition.jury?.length > 0,
      showResults: !!data.competition.showResults,
    };
  }
  return null;
}
