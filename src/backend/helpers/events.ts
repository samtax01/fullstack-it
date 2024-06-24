export function onShutdown(eventName: string) {
  return async () => {
    console.log(`[server]: Server is shutting down due to ${eventName}`);
    // close database connect here
    process.exit(0);
  };
}
