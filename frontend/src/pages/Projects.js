import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProjects } from '../api/client';

export default function Projects(){
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ content: [], totalElements: 0, number: 0, totalPages: 0 });

  const q = searchParams.get('q') || '';
  const year = searchParams.get('year') || '';
  const tech = searchParams.getAll('tech');
  const page = parseInt(searchParams.get('page')||'0',10);

  const techKey = tech.join(',');
  useEffect(()=>{
    setLoading(true);
    const params = { q: q || undefined, year: year || undefined, page, size: 10 };
    tech.forEach(t=>{});
    // Axios automatically serializes array params as repeated keys
    if (tech && tech.length) params.tech = tech;
    getProjects(params).then(setData).finally(()=>setLoading(false));
  },[q, year, techKey, page]);

  const [techInput, setTechInput] = useState('');
  const techList = useMemo(()=>tech, [tech]);

  function updateParam(key, value){
    const next = new URLSearchParams(searchParams);
    if (value === '' || value == null) next.delete(key); else next.set(key, value);
    next.delete('page');
    setSearchParams(next);
  }
  function addTech(tag){
    const next = new URLSearchParams(searchParams);
    next.append('tech', tag);
    next.delete('page');
    setSearchParams(next);
    setTechInput('');
  }
  function removeTech(tag){
    const next = new URLSearchParams();
    for (const [k,v] of searchParams.entries()){
      if (k==='tech' && v===tag) continue;
      next.append(k,v);
    }
    next.delete('page');
    setSearchParams(next);
  }

  return (
    <div>
      <h1>Projects</h1>
      <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:12}}>
        <input placeholder="Search by name" value={q} onChange={e=>updateParam('q', e.target.value)} />
        <input placeholder="Year" value={year} onChange={e=>updateParam('year', e.target.value)} style={{width:100}} />
        <input placeholder="Add tech" value={techInput} onChange={e=>setTechInput(e.target.value)} onKeyDown={e=>{ if(e.key==='Enter' && techInput.trim()){ addTech(techInput.trim()); } }} />
        <div style={{display:'flex', gap:6, alignItems:'center'}}>
          {techList.map(t=> (
            <span key={t} style={{border:'1px solid #ccc', padding:'2px 6px', borderRadius:12}}>{t} <button onClick={()=>removeTech(t)}>x</button></span>
          ))}
        </div>
      </div>
      {loading ? <p>Loading…</p> : (
        <div>
          <p>Results: {data.totalElements}</p>
          <ul>
            {data.content.map(p=> (
              <li key={p.id}>
                <strong>{p.name}</strong>
                {p.year ? ` (${p.year})` : ''}
                <div style={{color:'#666'}}>{p.shortDescription}</div>
                <div style={{fontSize:12}}>{(p.technologies||[]).join(', ')}</div>
              </li>
            ))}
          </ul>
          <div style={{display:'flex', gap:8, marginTop:12}}>
            <button disabled={page<=0} onClick={()=>updateParam('page', String(page-1))}>Prev</button>
            <span>Page {data.number+1} / {data.totalPages}</span>
            <button disabled={data.number+1>=data.totalPages} onClick={()=>updateParam('page', String(page+1))}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
