import type { ServerLoadEvent } from '@sveltejs/kit';
import * as cms from '../cms';

export const load = (event: ServerLoadEvent) => cms.load(event.url.pathname);
