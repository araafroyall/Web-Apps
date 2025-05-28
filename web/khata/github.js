async function githubApi(method, path, body = null) {
  const token = localStorage.getItem("github_token");
  const res = await fetch(`https://api.github.com/repos/${localStorage.getItem("repo")}/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : null
  });
  return res.ok ? res.json() : Promise.reject(await res.text());
}

async function getFileContent(path) {
  try {
    const res = await githubApi("GET", `contents/${path}`);
    return JSON.parse(atob(res.content));
  } catch {
    return [];
  }
}

async function updateFile(path, content, message = "update") {
  const existing = await githubApi("GET", `contents/${path}`).catch(() => null);
  const body = {
    message,
    content: btoa(JSON.stringify(content, null, 2)),
    sha: existing?.sha
  };
  return githubApi("PUT", `contents/${path}`, body);
}