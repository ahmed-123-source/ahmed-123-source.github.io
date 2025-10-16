import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { getProject } from '../api/client';

export default function ProjectDetail(){
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    getProject(id).then(setData).finally(()=>setLoading(false));
  },[id]);

  if (loading) return <p>Loading…</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      {data.year && <div>Year: {data.year}</div>}
      <div style={{margin:'8px 0', color:'#666'}}>{data.shortDescription}</div>
      <div style={{fontSize:12, marginBottom:12}}>{(data.technologies||[]).join(', ')}</div>
      {/* richContent is expected to be HTML or serialized rich text; we render as HTML here */}
      {data.richContent && <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.richContent)}} />}
      {/* Videos removed per request */}
    </div>
  );
}
