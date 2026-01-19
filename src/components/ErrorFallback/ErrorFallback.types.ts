export type ErrorFallbackProps = {
    image?: string;
    title: string;
    body: string;
} & (
    | {
          buttonText: string;
          to: string;
      }
    | {
          buttonText?: never;
          to?: never;
      }
);
