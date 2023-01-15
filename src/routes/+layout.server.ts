import type { CMSData } from '$lib/cms';
import * as cms from '$lib/cms';

type LoadData = {
  cms: CMSData;
};

export const load = async (): Promise<LoadData> => {
  const data: CMSData = await cms.load();
  return <LoadData>{ cms: data };
};
