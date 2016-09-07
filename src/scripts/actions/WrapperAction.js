export const INIT_FILTERS = 'INIT_FILTERS';

export function initFilters(queryFilters) {
  return {
    type: INIT_FILTERS,
    initialFilters: queryFilters
  };
}
