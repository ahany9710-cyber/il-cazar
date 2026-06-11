import { listings } from '../data/listings';

const UNIT_HASH_PREFIX = 'unit-';

/** e.g. #unit-2-gharf */
export function listingHash(slug: string): string {
  return `#${UNIT_HASH_PREFIX}${slug}`;
}

export function parseListingSlug(hash: string): string | null {
  const normalized = hash.replace(/^#/, '');
  if (!normalized.startsWith(UNIT_HASH_PREFIX)) return null;
  return normalized.slice(UNIT_HASH_PREFIX.length) || null;
}

export function getListingIndexBySlug(slug: string): number {
  return listings.findIndex((listing) => listing.slug === slug);
}

export function isUnitHash(hash: string): boolean {
  return parseListingSlug(hash) !== null;
}

export function setListingHash(slug: string, replace = true): void {
  const url = `${window.location.pathname}${window.location.search}${listingHash(slug)}`;
  if (replace) {
    window.history.replaceState(null, '', url);
  } else {
    window.history.pushState(null, '', url);
  }
}
