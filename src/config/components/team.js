// Configuration for the team component / page

const team = {
  // Whether the team page is enabled or not
  enabled: true,

  // The title of the team section
  title: 'Our Team',

  // The subtitle of the team section
  description: 'Meet the team behind the Caragol Foundation',

  // Members of the team
  members: [
    {
      // The name of the first member
      name: 'Stephen Caragol',
      // Clickable link for the name of the first member
      nameLink: null,
      // The job title of the first member
      title: 'Co-Founder',
      // The avatar of the first member
      avatar: '',
      // Social links of the first member
      social: {
        // website: '#',
        // twitter: '#',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/stephen-caragol-4994a233/',
        // github: '#',
      },
    },
    {
      name: 'Michelle Caragol',
      nameLink: null,
      title: 'Co-Founder',
      avatar: '',
      social: {
        // website: '#',
        // twitter: '#',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/michelle-caragol-a0223a46/',
        // github: '#',
      },
    },
    {
      name: 'Ian Caragol',
      nameLink: null,
      title: 'Board Member',
      avatar: '/assets/ian.jpg',
      social: {
        // website: '#',
        // twitter: '#',
        // instagram: '#',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/iancaragol/',
        github: 'https://github.com/iancaragol',
      },
    },
    {
      name: 'Leah Caragol',
      nameLink: null,
      title: 'Secretary',
      avatar: '/assets/leah.jpg',
      social: {
        // website: '#',
        // twitter: '#',
        instagram: 'https://www.instagram.com/leahcaragol/',
        // facebook: '#',
        // linkedin: '#',
        github: 'https://github.com/leahcaragol',
      },
    },
    {
      name: 'Grant Birkinbine',
      nameLink: 'https://birki.io',
      title: 'Web Developer',
      avatar: '/assets/grant.jpg',
      social: {
        website: 'https://birki.io',
        twitter: 'https://twitter.com/grantbirki',
        instagram: 'https://www.instagram.com/grantbirki/',
        // facebook: '#',
        linkedin: 'https://www.linkedin.com/in/grantbirkinbine/',
        github: 'https://github.com/grantbirki',
      },
    },
  ],
};

export default team;
