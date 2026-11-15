async function checkHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.API_URL}/health`, {
      signal: AbortSignal.timeout(2000),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export async function ApiStatus() {
  const healthy = await checkHealth();

  return (
    <p className="mt-6 text-sm">
      API status:{" "}
      <span className={healthy ? "text-green-600" : "text-red-600"}>
        {healthy ? "online" : "offline"}
      </span>
    </p>
  );
}
