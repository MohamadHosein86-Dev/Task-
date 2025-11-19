import { useEffect, useState } from "react";

export default function useFetch<T>(fn: () => Promise<T>, deps:string[] = []) {
  const [data, setData] = useState<T|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function run() {
      setLoading(true);
      setError(null);
      try {
        const result = await fn();
        if (mounted) setData(result);
      } catch {
        if (mounted) setError( "Unknown error");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    run();

    return () => { mounted = false; };
  }, deps);

  return { data, loading, error };
}
