import { useEffect, useState } from 'react';
import { getEvents } from '../api/client';

export default function Events(){
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{ setLoading(true); getEvents().then(setData).finally(()=>setLoading(false)); },[]);
  if (loading) return <p>Loading…</p>;
  return (
    <div>
      <h1>Events</h1>
      <ul>
        {data.map(e=> (
          <li key={e.id}>
            <strong>{e.name}</strong> {e.date ? `(${e.date})` : ''} {e.location ? `- ${e.location}` : ''}
            <div dangerouslySetInnerHTML={{__html: e.description}} />
            {e.url && <a href={e.url} target="_blank" rel="noreferrer">Link</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}
