const GITHUB_TOKEN = 'YOUR_ACCESS_TOKEN';
const USERNAME = 'username';

export default async function getTotalCommitsByUser(username) {
  const headers = {
    Authorization: `token ${GITHUB_TOKEN}`,
  };

  // Helper function to get all repositories of the user
  const fetchRepositories = async () => {
    let allRepos = [];
    let nextUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    while (nextUrl) {
      const response = await fetch(nextUrl, { headers });
      const data = await response.json();
      allRepos = [...allRepos, ...data];
      const linkHeader = response.headers.get('link');
      const nextLink = linkHeader?.match(/<(.*?)>; rel="next"/);
      nextUrl = nextLink ? nextLink[1] : null;
    }

    return allRepos;
  };

  // Helper function to get commit count for a single repository
  const fetchCommitCountForRepo = async (repoOwner, repoName) => {
    let commitCount = 0;
    let nextUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits?author=${username}&per_page=100`;

    while (nextUrl) {
      const response = await fetch(nextUrl, { headers });
      const commits = await response.json();
      commitCount += commits.length;
      const linkHeader = response.headers.get('link');
      const nextLink = linkHeader?.match(/<(.*?)>; rel="next"/);
      nextUrl = nextLink ? nextLink[1] : null;
    }

    return commitCount;
  };

  // Main logic to fetch all repositories and get commit counts in parallel
  const repos = await fetchRepositories();

  // Fetch commit counts in parallel for all repositories
  const commitCountPromises = repos.map(repo =>
    fetchCommitCountForRepo(repo.owner.login, repo.name)
  );

  // Wait for all promises to resolve
  const commitCounts = await Promise.all(commitCountPromises);

  // Sum all the commit counts
  const totalCommits = commitCounts.reduce((total, count) => total + count, 0);

  return totalCommits;
}

// Example usage
getTotalCommitsByUser(USERNAME)
  .then(totalCommits => {
    console.log(`Total commits by ${USERNAME}:`, totalCommits);
  })
  .catch(error => {
    console.error('Error fetching commits:', error);
  });
