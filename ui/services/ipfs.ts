export async function uploadToIPFS(data: any) {
  const res = await fetch(
    "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PINATA_JWT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const json = await res.json();

  return json.IpfsHash;
}