import React, { useState } from "react";

function SearchBar(props: { onSearch: (q: string) => void }) {
  const { onSearch } = props;
  const [q, setQ] = useState("");

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSearch(q.trim());
  };

  return (
    <form onSubmit={submit} className="flex gap-2 my-3">
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search meals..." className="flex-1 p-2 border border-gray-300 rounded" />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
