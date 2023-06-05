/** Details of an issue type scheme. */
export interface IssueTypeScheme {
  /** The ID of the default issue type of the issue type scheme. */
  defaultIssueTypeId?: string;
  /** The description of the issue type scheme. */
  description?: string;
  /** The ID of the issue type scheme. */
  id: string;
  /** Whether the issue type scheme is the default. */
  isDefault?: boolean;
  /** The name of the issue type scheme. */
  name: string;
}
