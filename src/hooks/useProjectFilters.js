import { useMemo, useState } from 'react';

export function useProjectFilters(projects) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');
  const [status, setStatus] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchQuery =
        query.trim() === '' ||
        `${project.title} ${project.summary} ${project.stack.join(' ')}`
          .toLowerCase()
          .includes(query.toLowerCase());

      const matchCategory = category === 'All' || project.category === category;
      const matchLevel = level === 'All' || project.level === level;
      const matchStatus = status === 'All' || project.status === status;

      return matchQuery && matchCategory && matchLevel && matchStatus;
    });
  }, [projects, query, category, level, status]);

  const resetFilters = () => {
    setQuery('');
    setCategory('All');
    setLevel('All');
    setStatus('All');
  };

  return {
    query,
    setQuery,
    category,
    setCategory,
    level,
    setLevel,
    status,
    setStatus,
    resetFilters,
    filteredProjects,
  };
}
