"use client";
import { useEffect, useState } from "react";
import client from "@/lib/api";

export default function Home() {
  const [apiStatus, setApiStatus] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.api.router.greet.$get();
      const data = await res.json();
      setApiStatus(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <div className="grid gap-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">API Status</h2>
          <pre>{JSON.stringify(apiStatus, null, 2)}</pre>
        </section>
      </div>
    </div>
  );
}
