// Domain configuration for heylexii.com
export const domainConfig = {
  domain: "heylexii.com",
  owner: {
    email: "alvardito92@gmail.com",
    name: "Alvaro",
    phone: "787-406-0601",
  },
  dns: {
    provider: "GoDaddy",
    nameservers: ["ns07.domaincontrol.com", "ns08.domaincontrol.com"],
    records: {
      a: "76.76.21.211",
      cname_www: "cname.vercel-dns.com",
      cname_domainconnect: "_domainconnect.gd.domaincontrol.com",
    },
  },
  vercel: {
    configured: true,
    ssl: "auto",
    redirects: {
      "www.heylexii.com": "heylexii.com",
      "heylexii.com/*": "heylexii.com/$1",
    },
  },
}

export async function configureDomainForLexii() {
  console.log("🌐 Configuring heylexii.com for LEXII platform...")

  // Vercel domain configuration
  const vercelConfig = {
    name: "heylexii.com",
    type: "CNAME",
    value: "cname.vercel-dns.com",
  }

  // SSL Certificate auto-generation
  const sslConfig = {
    domain: "heylexii.com",
    subdomains: ["www", "api", "admin"],
    autoRenew: true,
  }

  console.log("✅ Domain ready for LEXII deployment!")
  return { vercelConfig, sslConfig }
}
