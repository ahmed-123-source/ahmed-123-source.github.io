import axios from 'axios';

// If REACT_APP_API_URL is provided, we use it. Otherwise we fall back to static JSON under public/data/* for free static hosting.
const apiBase = process.env.REACT_APP_API_URL;
const useStatic = !apiBase || apiBase === 'static';

const api = axios.create({ baseURL: apiBase || 'http://localhost:8080' });

// Helper to fetch static JSON from /public/data
async function fetchStatic(path) {
	const base = process.env.PUBLIC_URL || '';
	const res = await fetch(`${base}/data/${path}`, { headers: { 'Accept': 'application/json' } });
	if (!res.ok) throw new Error(`Failed to load ${path} (${res.status})`);
	return res.json();
}

function filterAndPaginateProjects(all, params = {}) {
	const { q, year, tech, page = 0, size = 10 } = params;
	let list = Array.isArray(all) ? all.slice() : [];
	// Filter by search query in name
	if (q) {
		const ql = String(q).toLowerCase();
		list = list.filter(p => String(p.name || '').toLowerCase().includes(ql));
	}
	// Filter by year (string or number)
	if (year) {
		list = list.filter(p => String(p.year || '').trim() === String(year).trim());
	}
	// Filter by technologies (intersection contains all provided techs)
	const techList = Array.isArray(tech) ? tech : (tech ? [tech] : []);
	if (techList.length) {
		list = list.filter(p => {
			const pt = Array.isArray(p.technologies) ? p.technologies.map(String) : [];
			return techList.every(t => pt.includes(String(t)));
		});
	}
	const totalElements = list.length;
	const pageNum = Math.max(parseInt(page, 10) || 0, 0);
	const pageSize = Math.max(parseInt(size, 10) || 10, 1);
	const totalPages = Math.max(Math.ceil(totalElements / pageSize), 1);
	const start = pageNum * pageSize;
	const content = list.slice(start, start + pageSize);
	return { content, totalElements, number: pageNum, totalPages };
}

export const getProjects = async (params) => {
	if (useStatic) {
		const data = await fetchStatic('projects.json');
		return filterAndPaginateProjects(data, params);
	}
	return api.get('/api/projects', { params }).then(r => r.data);
};

export const getProject = async (id) => {
	if (useStatic) {
		const data = await fetchStatic('projects.json');
		const item = data.find(p => String(p.id) === String(id));
		if (!item) throw new Error('Not found');
		return item;
	}
	return api.get(`/api/projects/${id}`).then(r => r.data);
};

export const getAchievements = async () => {
	if (useStatic) return fetchStatic('achievements.json');
	return api.get('/api/achievements').then(r => r.data);
};

export const getEvents = async () => {
	if (useStatic) return fetchStatic('events.json');
	return api.get('/api/events').then(r => r.data);
};

export const getCvList = async () => {
	if (useStatic) return fetchStatic('cv.json');
	return api.get('/api/cv').then(r => r.data);
};
