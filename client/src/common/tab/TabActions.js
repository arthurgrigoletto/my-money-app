import { TAB_SELECTED, TAB_SHOWED } from '../../main/types';

export const selectTab = tabId => {
  return {
    type: TAB_SELECTED,
    payload: tabId
  };
};

export const showTabs = (...tabIds) => {
  const tabToShow = {};
  tabIds.map(element => (tabToShow[element] = true));

  return {
    type: TAB_SHOWED,
    payload: tabToShow
  };
};
