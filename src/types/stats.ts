/**
 * Statistics types.
 */

/** Query type counts (DNS record types) */
export interface QueryTypeCounts {
  A?: number;
  AAAA?: number;
  ANY?: number;
  SRV?: number;
  SOA?: number;
  PTR?: number;
  TXT?: number;
  NAPTR?: number;
  MX?: number;
  DS?: number;
  RRSIG?: number;
  DNSKEY?: number;
  NS?: number;
  SVCB?: number;
  HTTPS?: number;
  OTHER?: number;
}

/** Query status counts */
export interface QueryStatusCounts {
  UNKNOWN?: number;
  GRAVITY?: number;
  FORWARDED?: number;
  CACHE?: number;
  REGEX?: number;
  DENYLIST?: number;
  EXTERNAL_BLOCKED_IP?: number;
  EXTERNAL_BLOCKED_NULL?: number;
  EXTERNAL_BLOCKED_NXRA?: number;
  GRAVITY_CNAME?: number;
  REGEX_CNAME?: number;
  DENYLIST_CNAME?: number;
  RETRIED?: number;
  RETRIED_DNSSEC?: number;
  IN_PROGRESS?: number;
  DBBUSY?: number;
  SPECIAL_DOMAIN?: number;
  CACHE_STALE?: number;
  EXTERNAL_BLOCKED_EDE15?: number;
}

/** Reply type counts */
export interface ReplyTypeCounts {
  UNKNOWN?: number;
  NODATA?: number;
  NXDOMAIN?: number;
  CNAME?: number;
  IP?: number;
  DOMAIN?: number;
  RRNAME?: number;
  SERVFAIL?: number;
  REFUSED?: number;
  NOTIMP?: number;
  OTHER?: number;
  DNSSEC?: number;
  NONE?: number;
  BLOB?: number;
}

export interface StatsSummary {
  queries: {
    total: number;
    blocked: number;
    percent_blocked: number;
    unique_domains: number;
    forwarded: number;
    cached: number;
    /** Queries per second */
    frequency?: number;
    /** Counts by DNS record type */
    types?: QueryTypeCounts;
    /** Query status classifications */
    status?: QueryStatusCounts;
    /** Reply type counts */
    replies?: ReplyTypeCounts;
  };
  clients: {
    active: number;
    total: number;
  };
  gravity: {
    domains_being_blocked: number;
    last_update: number;
  };
  took?: number;
}

export interface UpstreamStats {
  upstreams: Array<{
    name: string;
    ip: string;
    port: number;
    count: number;
    percentage: number;
  }>;
  forwarded: number;
  total: number;
  took?: number;
}

/** Top domain entry */
export interface TopDomainEntry {
  domain: string;
  count: number;
}

export interface TopDomainsStats {
  domains: TopDomainEntry[];
  total_queries: number;
  blocked_queries?: number;
  took?: number;
}

/** Top client entry */
export interface TopClientEntry {
  /** Client IP address */
  ip: string;
  /** Client hostname (if available) */
  name?: string | null;
  /** Query count from this client */
  count: number;
}

export interface TopClientsStats {
  clients: TopClientEntry[];
  total_queries: number;
  blocked_queries?: number;
  took?: number;
}

export interface QueryTypesStats {
  types: Record<string, number>;
  total: number;
  took?: number;
}

export interface RecentBlockedResponse {
  blocked: string[];
  took?: number;
}

export interface DatabaseSummary extends StatsSummary {
  database: {
    size: number;
    queries: number;
  };
}

export interface StatsOptions {
  /** Number of results to return */
  count?: number;
  /** Only show blocked queries */
  blocked?: boolean;
  /** Number of entries to show (alternative to count) */
  show?: number;
}

export interface DatabaseStatsOptions extends StatsOptions {
  /** Start timestamp */
  from?: number;
  /** End timestamp */
  until?: number;
}
