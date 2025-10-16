import { useEffect, useState } from 'react';
import { getAchievements } from '../api/client';

export default function Achievements(){
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{ setLoading(true); getAchievements().then(setData).finally(()=>setLoading(false)); },[]);
  if (loading) return <p>Loading…</p>;
  return (
    <div>
      <h1>Achievements</h1>
      <ul>
        {data.map(a=> (
          <li key={a.id}>
            <strong>{a.title}</strong> {a.date ? `(${a.date})` : ''}
            <div dangerouslySetInnerHTML={{__html: a.description}} />
            {a.url && <a href={a.url} target="_blank" rel="noreferrer">Link</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}
