const dummyData = [
    {
      category: "Information Technology",
      courses: [
        {
          no: 1,
          free: 1,
          name: "CS50's Introduction to Computer Science",
          provider: "EDX",
          duration: "6-18 hours per week",
          image: "https://ccitraining.edu/wp-content/uploads/2023/12/Information-Technology.jpg",
          link: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science"
        },
        {
          no: 2,
          free: 1,
          name: "Introduction to Cyber Security",
          provider: "Udemy",
          duration: "1 hours 8 minutes",
          image: "https://ccitraining.edu/wp-content/uploads/2023/12/Information-Technology.jpg",
          link: "https://www.udemy.com/course/certified-secure-netizen/"
        },
        {
          no: 3,
          free: 1,
          name: "Web Development Basics",
          provider: "EDX",
          duration: "1 hour",
          image: "https://ccitraining.edu/wp-content/uploads/2023/12/Information-Technology.jpg",
          link: "https://www.edx.org/learn/computer-science/ibm-guided-project-web-development-w-html-css-for-beginners?index=product&queryID=d3b7fadf8901acea3dc60500ccb88b8e&position=2&results_level=first-level-results&term=Web+Development+Basics&objectID=course-40eabb04-17b3-430d-85e8-3f2ef697417e&campaign=Guided+Project%3A+Web+Development+w%2F+HTML+%26+CSS+for+Beginners&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
        },
        {
          no: 4,
          free: 1,
          name: "Google IT Automation with Python",
          provider: "Udemy",
          duration: "2 hours",
          image: "https://ccitraining.edu/wp-content/uploads/2023/12/Information-Technology.jpg",
          link: "https://www.udemy.com/course/python-from-beginner-to-expert-starter-free/"
        }
      ]
    },
    {
      category: "Business & Entrepreneurship",
      courses: [
        {
          no: 1,
          free: 2,
          name: "Entrepreneurship in Emerging Economies",
          provider: "EDX",
          duration: "18 hours",
          image: "https://grow.google/intl/uk/google-career-certificates/digital-marketing-ecommerce/",
          link: "https://www.edx.org/learn/entrepreneurship/harvard-university-entrepreneurship-in-emerging-economies?index=product&queryID=21417bef07b01d1e4db67bdf56f80eee&position=4&linked_from=autocomplete&c=autocomplete"
        },
        {
          no: 2,
          free: 2,
          name: "Innovation for Entrepreneurs",
          provider: "Udemy",
          duration: "1 hours",
          image: "https://grow.google/intl/uk/google-career-certificates/digital-marketing-ecommerce/",
          link: "https://www.udemy.com/course/60-day-startup-introduction-to-startups/"
        },
        {
          no: 3,
          free: 2,
          name: "Fundamentals of Digital Marketing",
          provider: "Udemy",
          duration: "1 hour",
          image: "https://grow.google/intl/uk/google-career-certificates/digital-marketing-ecommerce/",
          link: "https://www.udemy.com/course/the-fundamentals-of-the-digital-marketing/"
        },
        {
          no: 4,
          free: 2,
          name: "Business Fundamentals",
          provider: "EDX",
          duration: "18 hours",
          image: "https://grow.google/intl/uk/google-career-certificates/digital-marketing-ecommerce/",
          link: "https://www.edx.org/learn/business-administration/university-of-british-columbia-business-foundations?index=product&queryID=391d5f0e1c09959a429b133c779c9890&position=1&results_level=first-level-results&term=business+fundamentals&objectID=course-1c30e9b3-78ee-4c57-9af9-922153073d99&campaign=Business+Foundations&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
        }
      ]
    },
    {
      category: "Healthcare & Wellness",
      courses: [
        {
          no: 1,
          free: 3,
          name: "Introduction to Psychology",
          provider: "EDX",
          duration: "50 hours",
          image: "https://blogs.longwood.edu/edwinelleportfolio/files/2016/12/blog-examprep-061913.jpg",
          link: "https://www.edx.org/learn/python/st-margarets-episcopal-school-introduction-to-psychology?index=product&queryID=8f57a3b8e1f080ee7583bb6dcd9566f3&position=2&results_level=first-level-results&term=introduction+to+pyschology&objectID=course-1580c6c4-5a81-4a79-bf35-bb4dddfb891f&campaign=Introduction+to+Psychology&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
        },
        {
          no: 2,
          free: 3,
          name: "COVID-19: Tackling the Novel Coronavirus",
          provider: "Udemy",
          duration: "2 hours",
          image: "https://blogs.longwood.edu/edwinelleportfolio/files/2016/12/blog-examprep-061913.jpg",
          link: "https://www.udemy.com/course/mental-health-for-coping-with-stress-anxiety-covid-19/"
        },
        {
          no: 3,
          free: 3,
          name: "Health Informatics on FHIR",
          provider: "EDX",
          duration: "50 hours",
          image: "https://blogs.longwood.edu/edwinelleportfolio/files/2016/12/blog-examprep-061913.jpg",
          link: "https://www.edx.org/learn/health-informatics/the-georgia-institute-of-technology-health-informatics-data-and-interoperability-standards?index=product&queryID=6c8de4b7d5aa6dc5c3480b7b6d1868d3&position=1&results_level=first-level-results&term=Health+Informatics+on+FHIR&objectID=course-e3933140-d4dc-4a6a-bf08-4e068cc5609e&campaign=Health+Informatics%3A+Data+and+Interoperability+Standards&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
        },
        {
          no: 4,
          free: 3,
          name: "Nutrition and Health: Macronutrients and Overnutrition",
          provider: "EDX",
          duration: "52 hours",
          image: "https://blogs.longwood.edu/edwinelleportfolio/files/2016/12/blog-examprep-061913.jpg",
          link: "https://www.edx.org/learn/nutrition/wageningen-university-research-nutrition-and-health-macronutrients-and-overnutrition?index=product&queryID=3a8f18279511ec67a15e1d6d9c96bbca&position=1&results_level=first-level-results&term=Nutrition+and+Health%3A+Macronutrients+and+Overnutrition&objectID=course-c2f0c9cd-6577-4f38-8a31-56c8dd1cf2a4&campaign=Nutrition+and+Health%3A+Macronutrients+and+Overnutrition&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
        }
      ]
    },
    {
      category: "Art & Humanities",
      courses: [
        {
          no: 1,
          free: 4,
          name: "Modern Art & Ideas",
          provider: "Udemy",
          duration: "1 hours",
          image: "https://cdn.mos.cms.futurecdn.net/7YrobQvFFzw8aWsAUtoYXB-650-80.jpg.webp",
          link: "https://www.udemy.com/course/art-fundamentals-in-one-hour/"
        },
        {
          no: 2,
          free: 4,
          name: "Shakespeare's Life and Work",
          provider: "EDX",
          duration: "20 hours",
          image: "https://cdn.mos.cms.futurecdn.net/7YrobQvFFzw8aWsAUtoYXB-650-80.jpg.webp",
          link: "https://www.edx.org/learn/shakespeare/harvard-university-shakespeare-s-life-and-work?index=product&queryID=79c2392a4919e70fb6d143d3345533ce&position=1&results_level=first-level-results&term=Shakespeare%E2%80%99s+Life+and+Work&objectID=course-36eb1cb5-abab-4f1c-b9f7-1c386f5b11e7&campaign=Shakespeare%27s+Life+and+Work&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
        },
        {
          no: 3,
          free: 4,
          name: "Introduction to Philosophy",
          provider: "Udemy",
          duration: "1 hour",
          image: "https://cdn.mos.cms.futurecdn.net/7YrobQvFFzw8aWsAUtoYXB-650-80.jpg.webp",
          link: "https://www.udemy.com/course/introduction-to-philosophy-with-plato/"
        },
        {
          no: 4,
          free: 4,
          name: "Film, Images & Historical Interpretation",
          provider: "Udemy",
          duration: "30 mins",
          image: "https://cdn.mos.cms.futurecdn.net/7YrobQvFFzw8aWsAUtoYXB-650-80.jpg.webp",
          link: "https://www.udemy.com/course/filmschoolcinema101/"
        }
      ]
    },
      {
        category: "Environmental Studies",
        courses: [
        {
            no: 1,
            free: 5,
            name: "The Science of Climate Change",
            provider: "EDX",
            duration: "16 hours",
            image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20211112073341/ri/673/picture/2021/11/shutterstock_1127223938.jpg",
            link: "https://www.edx.org/learn/climate-change/sdg-academy-climate-change-the-science-and-global-impact?index=product&queryID=e7325c8c18588dcef7ff21cbeaa01beb&position=1&results_level=first-level-results&term=Climate+Change&objectID=course-32779451-9094-45c8-9805-505bfe77ae02&campaign=Climate+Change%3A+The+Science+and+Global+Impact&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
          },
          {
            no: 2,
            free: 5,
            name: "Biodiversity and Conservation",
            provider: "EDX",
            duration: "7 hours",
            image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20211112073341/ri/673/picture/2021/11/shutterstock_1127223938.jpg",
            link: "https://www.edx.org/learn/ecosystems/ethx-environmental-dna-sensing-the-diversity-of-life-and-assessing-ecosystem-health?index=product&queryID=086404033b906d96cc0eb17afc3ac5a3&position=1&results_level=first-level-results&term=Biodiversity+and+Conservation&objectID=course-66aff7f5-721e-496e-9e85-4c62ded67880&campaign=Environmental+DNA%3A+Sensing+the+Diversity+of+Life+and+Assessing+Ecosystem+Health&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
          },
          {
            no: 3,
            free: 5,
            name: "Introduction to Environmental Law and Policy",
            provider: "EDX",
            duration: "5 hour",
            image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20211112073341/ri/673/picture/2021/11/shutterstock_1127223938.jpg",
            link: "https://www.edx.org/learn/climate-change/massachusetts-institute-of-technology-cities-and-climate-change-mitigation-and-adaptation?index=product&queryID=ab7f2c0e7b9545c7d914b57028209602&position=1&results_level=first-level-results&term=Environmental+Law+and+Policy&objectID=course-6101ee5b-bd7a-4ce0-b229-949de6bf28dd&campaign=Cities+and+Climate+Change%3A+Mitigation+and+Adaptation&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
          },
          {
            no: 4,
            free: 5,
            name: "Global Environmental Management",
            provider: "FutureLearn",
            duration: "4 hour",
            image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20211112073341/ri/673/picture/2021/11/shutterstock_1127223938.jpg",
            link: "https://www.futurelearn.com/courses/introduction-to-environmental-science"
          }
        ]
    }
  ];
  
  // Example usage:
  console.log(dummyData);