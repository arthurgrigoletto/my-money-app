import { TAB_SELECTED } from '../../main/types';

export const selectTab = tabId => {
  return {
    type: TAB_SELECTED,
    payload: tabId
  };
};
