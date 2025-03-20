<template>
  <div class="section career-content-wrapper">
    <!-- Mid-level Graphic Designer (Full-time)-->
    <div
      class="section-inner career-content"
      v-if="$route.params.id === 'graphic-designer'"
    >
      <div class="career-content-title">
        <span>Mid-level Graphic Designer (Full-time)</span>
        <!-- <button @click=";[(nowId = -1), onSelect(nowId)]">지원하기</button> -->
      </div>
      <div class="content-item">
        <div class="content-message">
          Zenerate has received multiple awards and funding to grow across the
          world. We are now looking for an enthusiastic full-time
          <strong>Graphic Designer</strong> to immediately join our new Downtown
          Los Angeles office as we're expanding our operations in the States. We
          hope you'll join our fast-growing, innovative company!
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.about_zenerate.name }}</div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.about_zenerate.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">
          {{ CAREERS.our_innovative_solution.name }}
        </div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.our_innovative_solution.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.who_we_are.name }}</div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.who_we_are.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.who_we_serve.name }}</div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.who_we_serve.content }}
          </li>
        </ul>
      </div>

      <div class="content-item">
        <div class="content-item-title">
          {{ CAREERS.key_responsibilities.name }}
        </div>
        <ul class="content-item-content">
          <li>
            Work as part of a cross-functional team (sales, product, executive)
            that collaborates on all product marketing materials.
          </li>
          <li>
            Be willing to take on any projects and tasks, doing whatever it
            takes to complete the highest quality end results.
          </li>
          <li>
            Demonstrate versatility and experience in the areas of print media,
            digital communications, and multimedia technologies.
          </li>
          <li>
            Direct brand identity and overall graphic direction, tying in brand
            messaging, color, imagery, type and composition into deliverables.
          </li>
          <li>
            Create all creative print collateral and digital graphics for the
            company. 2D and 3D graphics could include: social and web assets,
            printed assets, environmental graphics, signage and wayfinding,
            branded swag, packaging, digital interfaces, micro-sites, video
            assets, and more.
          </li>
          <li>
            Design marketing and sales support materials including marketing
            campaigns, sales presentations, portfolio images, social media
            activities, and case studies.
          </li>
          <li>
            Support HR recruitment activities by designing recruiting material
            (videos, announcements, etc.)
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.requirements.name }}</div>
        <ul class="content-item-content">
          <li>
            Bachelor's degree in graphic design, environmental graphic design,
            information design, communication design or similar
          </li>
          <li>
            Minimum 5 years of professional work experience in graphic design or
            a related field
          </li>
          <li>
            Strong illustration, typography, composition and information design
            skills across print collateral and digital tools (i.e. websites,
            apps, etc.)
          </li>
          <li>
            Excellent analytical, problem solving, and communication skills
          </li>
          <li>
            A passion for human-centered design and creative problem solving
          </li>
          <li>
            Must be highly self-motivated and able to work independently,
            proactively
          </li>
          <li>
            Be willing to wear multiple hats as the company grows and expands as
            a B2B SaaS company
          </li>
          <li>Fluent in Adobe Photoshop, Illustrator, After Effects, etc.</li>
        </ul>
      </div>

      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.not_necessary.name }}</div>
        <ul class="content-item-content">
          <li>
            Experience in related industries:PropTech, real estate development,
            urban planning, construction, architecture
          </li>
          <li>
            Experience designing for architectural scales, sections, plans and
            elevation
          </li>
          <li>
            Understands the needs and priorities of our primary customers: real
            estate developers and architects
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">
          {{ CAREERS.company_benefits.name }}
        </div>
        <ul class="content-item-content">
          <li>Flexible work hours</li>
          <li>Professional development learning stipend</li>
          <li>Health and wellness perks</li>
        </ul>
      </div>

      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.how_to_apply.name }}</div>
        <ul class="content-item-content">
          <li>
            Please send your resume (PDF) and work samples if available to
            <span class="email-highlight">apply@zenerate.ai</span>
          </li>
          <li>
            A cover letter is optional: can be used to describe salary
            requirements and interests
          </li>
        </ul>
      </div>
      <button
        class="back-button hover-pointer"
        @click="
          ;[router.push({ path: '/career', query: getCurrentUtmQuery(router) })]
        "
      >
        <a href="#firstPage"> <span>BACK</span></a>
        <svg
          width="122"
          height="28"
          viewBox="0 0 122 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M121 27H0.999997L27.6886 1"
            stroke="#4747FF"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- Head of Sales  (Full-time) -->
    <div
      class="section-inner career-content"
      v-if="$route.params.id === 'head-of-sales'"
    >
      <div class="career-content-title">
        <span>Head of Sales (Full-time)</span>
        <!-- <button @click=";[(nowId = -1), onSelect(nowId)]">지원하기</button> -->
      </div>
      <div class="content-item">
        <div class="content-message">
          Zenerate has received multiple awards and funding to grow across the
          world. We are now looking for an enthusiastic
          <strong>full-time Head of Sales</strong> to immediately join our new
          <strong>Downtown Los Angeles</strong> office as we’re expanding our
          operations in the States. We hope you’ll join our fast-growing,
          innovative company!
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">About Zenerate</div>
        <ul class="content-item-content">
          <li>
            We are a real estate generative design company that pairs feasible
            building design with market-based profit metrics.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Our innovative solution</div>
        <ul class="content-item-content">
          <li>
            We provide a web platform and consulting service to serve all
            commercial and multi-family building types. Our design automation
            software combines AI and Data Science to search millions of
            possibilities, delivering fast and easy feasibility studies and
            maximized profitability.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Who we are</div>
        <ul class="content-item-content">
          <li>
            We are a team of architects, software engineers and AI developers
            driven to provide building solutions that position properties into
            successful operations for various stakeholders. We go above and
            beyond to ensure that our world-class solution helps our customers
            reach and surpass their real estate development goals.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Who we serve</div>
        <ul class="content-item-content">
          <li>
            We collaborate with customers who need an integrated design and
            profitability analysis; maximized profit returns based on quickly
            generated options; a quick assessment to check viability of a site
            or property to transform, reconfigure, or adaptively reuse; and/or
            thoughtfully-planned out developments that benefit stakeholders.
          </li>
        </ul>
      </div>

      <div class="content-item">
        <div class="content-item-title">Key Responsibilities</div>
        <ul class="content-item-content">
          <li>
            Represent Zenerate with professional courtesy and enthusiasm to all
            customers and stakeholders
          </li>
          <li>
            Own the entire sales process for your dedicated book of business,
            from developing sales strategy to building the pipeline of deals
          </li>
          <li>Channel the customer voice to the Product team (Korea)</li>
          <li>Sign your first paid accounts with Zenerate customers</li>
          <li>
            Establish a strong pipeline of prospects with projected revenues and
            timelines
          </li>
          <li>
            Attend industry events, partnered with customer success to improve
            our onboarding and support model, and provided customer feedback to
            influence the product roadmap
          </li>
          <li>
            Provide feedback and support to improve our sales process and
            strategy, to scale Zenerate to a billion-dollar business
          </li>
          <li>
            Work with account executive and team to launch additional regions
            and expand our presence in the industry
          </li>
          <li>
            Maintain sales support materials including sales presentations,
            portfolio images and case studies
          </li>
          <li>
            Write and review proposals for accurate content and consistent
            language and formatting to ensure the highest quality of proposal is
            submitted to the client
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Qualifications</div>
        <ul class="content-item-content">
          <li>
            Entrepreneurial team player, quick to adapt to changing situations
          </li>
          <li>
            Proven track record of lead & pipeline generation, meeting and
            surpassing sales quotas
          </li>
          <li>
            Minimum 5 years of SaaS / Software sales experience in commercial
            real estate or architecture-related industries
          </li>
          <li>
            Strong listener with excellent presentation and closure skills
          </li>
          <li>Account planning and execution skills</li>
          <li>Eloquent & effective written, verbal, interpersonal skills</li>
          <li>
            Ability to build and maintain professional relationships with
            C-level executives
          </li>
          <li>
            A passion for human-centered design and creative problem solving
          </li>
          <li>
            Must be highly self-motivated and able to work independently,
            proactively
          </li>
          <li>
            Be willing to wear multiple hats as the company grows and expands
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Ideal but not necessary</div>
        <ul class="content-item-content">
          <li>
            Experience in related industries: PropTech, real estate development,
            urban planning, construction, architecture
          </li>
          <li>
            Understanding of Building Code, Land use, Zoning, Accessibility,
            etc.
          </li>
          <li>
            Ability to search and analyze Zoning regulations in the Los Angeles
            area
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Company benefits</div>
        <ul class="content-item-content">
          <li>Flexible work hours</li>
          <li>Professional development learning stipend</li>
          <li>Health and wellness perks</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">How to apply</div>
        <ul class="content-item-content">
          <li>
            Please send your resume (PDF) and work samples if available to
            <span class="email-highlight">apply@zenerate.ai</span>
          </li>
          <li>
            A cover letter is optional: can be used to describe salary
            requirements and interests
          </li>
        </ul>
      </div>
      <button
        class="back-button hover-pointer"
        @click="
          ;[router.push({ path: '/career', query: getCurrentUtmQuery(router) })]
        "
      >
        <a href="#firstPage"> <span>BACK</span></a>
        <svg
          width="122"
          height="28"
          viewBox="0 0 122 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M121 27H0.999997L27.6886 1"
            stroke="#4747FF"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- Architect / Architectural Designer (Full-time)-->
    <div
      class="section-inner career-content"
      v-if="$route.params.id === 'architect-architectural-designer'"
    >
      <div class="career-content-title">
        <span>Architect / Architectural Designer (Full-time)</span>
        <!-- <button @click=";[(nowId = -1), onSelect(nowId)]">지원하기</button> -->
      </div>
      <div class="content-item">
        <div class="content-message">
          Zenerate has received multiple awards and funding to grow across the
          world. We are now looking for an enthusiastic
          <strong>full-time Architect / Architectural Designer</strong> to
          immediately join our new <strong>Downtown Los Angeles</strong> office
          as we're expanding our operations in the States. We hope you'll join
          our fast-growing, innovative company!
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">About Zenerate</div>
        <ul class="content-item-content">
          <li>
            We are a real estate generative design company that pairs feasible
            building design with market-based profit metrics.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Our innovative solution</div>
        <ul class="content-item-content">
          <li>
            We provide a web platform and consulting service to serve all
            commercial and multi-family building types. Our design automation
            software combines AI and Data Science to search millions of
            possibilities, delivering fast and easy feasibility studies and
            maximized profitability.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Who we are</div>
        <ul class="content-item-content">
          <li>
            We are a team of architects, software engineers and AI developers
            driven to provide building solutions that position properties into
            successful operations for various stakeholders. We go above and
            beyond to ensure that our world-class solution helps our customers
            reach and surpass their real estate development goals.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Who we serve</div>
        <ul class="content-item-content">
          <li>
            We collaborate with customers who need an integrated design and
            profitability analysis; maximized profit returns based on quickly
            generated options; a quick assessment to check viability of a site
            or property to transform, reconfigure, or adaptively reuse; and/or
            thoughtfully-planned out developments that benefit stakeholders.
          </li>
        </ul>
      </div>

      <div class="content-item">
        <div class="content-item-title">Key Responsibilities</div>
        <ul class="content-item-content">
          <li>
            Demonstrate understanding of the real estate development industry
            and multifamily housing
          </li>
          <li>Conduct zoning and building code research</li>
          <li>
            Represent Zenerate with professional courtesy and enthusiasm to all
            customers and stakeholders
          </li>
          <li>
            Assist with developing product and service for real estate
            developers and project managers
          </li>
          <li>
            Channel the customer voice and feedback to the internal team to
            influence the product roadmap
          </li>
          <li>
            Manage cross-functional communication with internal operations
          </li>
          <li>
            Regularly report to and communicate with managerial team located
            internationally
          </li>
          <li>
            Attend and present at industry events, partnered with customer
            success to improve our onboarding and sales model
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Qualifications</div>
        <ul class="content-item-content">
          <li>
            A minimum of 5 to 8 years of experience in multifamily housing
            projects
          </li>
          <li>
            Excellent understanding of Building Code, Land use, Zoning,
            Accessibility, etc.
          </li>
          <li>
            Ability to search and analyze Zoning regulations in the Los Angeles
            area
          </li>
          <li>
            Ability to meet clients/customers and present our products in person
          </li>
          <li>
            Business development experience and salesmanship with a
            results-oriented attitude
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Ideal</div>
        <ul class="content-item-content">
          <li>Licensed in California</li>
          <li>Public speaking experience</li>
          <li>Experience working with real estate developers</li>
          <li>Strong project management and presentation skills</li>
          <li>
            Detail-oriented problem solver who enjoys researching and learning
            ongoing real estate trends
          </li>
          <li>
            Technical expertise with Excel and design software: Rhino, Revit,
            AutoCAD, Adobe Creative Suite, SketchUp
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Salary</div>
        <ul class="content-item-content">
          <li>Compensation will be commensurate with experience</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">How to apply</div>
        <ul class="content-item-content">
          <li>
            Please send your resume (PDF) and work samples to
            <span class="email-highlight">apply@zenerate.ai</span>
          </li>
          <li>
            A cover letter is optional: can be used to describe salary
            requirements and interests
          </li>
        </ul>
      </div>
      <button
        class="back-button hover-pointer"
        @click="
          ;[router.push({ path: '/career', query: getCurrentUtmQuery(router) })]
        "
      >
        <a href="#firstPage"> <span>BACK</span></a>
        <svg
          width="122"
          height="28"
          viewBox="0 0 122 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M121 27H0.999997L27.6886 1"
            stroke="#4747FF"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- Project Analyst, Real Estate Development (Part-time)-->
    <div
      class="section-inner career-content"
      v-if="$route.params.id === 'project-analyst-real-estate-development'"
    >
      <div class="career-content-title">
        <span>Project Analyst, Real Estate Development (Part-time)</span>
        <!-- <button @click=";[(nowId = -1), onSelect(nowId)]">지원하기</button> -->
      </div>

      <div class="content-item">
        <div class="content-message">
          Zenerate has received multiple awards and funding to grow across the
          world. We are now looking for a motivated
          <strong>Part-time Project Analyst, Real Estate Development</strong> to
          immediately join our new <strong>Downtown Los Angeles</strong> office
          as we’re expanding our operations in the States. We hope you’ll join
          our fast-growing, innovative company!
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">About Zenerate</div>
        <ul class="content-item-content">
          <li>
            We are a real estate generative design company that pairs feasible
            building design with market-based profit metrics.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Our innovative solution</div>
        <ul class="content-item-content">
          <li>
            We provide a web platform and consulting service to serve all
            commercial and multi-family building types. Our design automation
            software combines AI and Data Science to search millions of
            possibilities, delivering fast and easy feasibility studies and
            optimized profitability.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Who we are</div>
        <ul class="content-item-content">
          <li>
            We are a team of architects, software engineers and AI developers
            driven to provide building solutions that position properties into
            successful operations for various stakeholders. We go above and
            beyond to ensure that our world-class solution helps our customers
            reach and surpass their real estate development goals.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Who we serve</div>
        <ul class="content-item-content">
          <li>
            We collaborate with customers who need an integrated design and
            profitability analysis; maximized profit returns based on quickly
            generated options; a quick assessment to check viability of a site
            or property to transform, reconfigure, or adaptively reuse; and/or
            thoughtfully-planned out developments that benefit stakeholders.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Key Responsibilities</div>
        <ul class="content-item-content">
          <li>
            Demonstrate understanding of the real estate development industry
          </li>
          <li>
            Assist with developing product and service for real estate
            developers and project managers
          </li>
          <li>
            Regularly report to and communicate with managerial team located
            internationally
          </li>
          <li>
            Search, analyze, and report Zoning regulations in the Los Angeles
            area for successful product development
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Qualifications</div>
        <ul class="content-item-content">
          <li>
            A minimum of 1-2 years of experience in real estate development
            (multifamily housing projects)
          </li>
          <li>
            Excellent understanding of Building Code, Land use, Zoning,
            Accessibility, etc.
          </li>
          <li>
            Strong quantitative, financial analysis and modeling, MS Excel
            skills are required
          </li>
          <li>Exceptional time management and prioritization skills</li>
          <li>
            Excellent communication, written and interpersonal skills at all
            levels
          </li>
          <li>
            Must be able to work well in groups but also independently to manage
            and own tasks
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Ideal</div>
        <ul class="content-item-content">
          <li>Architect licensed in California</li>
          <li>Experience working with real estate developers</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Salary</div>
        <ul class="content-item-content">
          <li>Compensation will be commensurate with experience</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">How to apply</div>
        <ul class="content-item-content">
          <li>
            Please send your resume (PDF) and work samples to
            <span class="email-highlight">apply@zenerate.ai</span>
          </li>
          <li>
            A cover letter is optional: can be used to describe salary
            requirements and interests
          </li>
        </ul>
      </div>
      <button
        class="back-button hover-pointer"
        @click="
          ;[router.push({ path: '/career', query: getCurrentUtmQuery(router) })]
        "
      >
        <a href="#firstPage"> <span>BACK</span></a>
        <svg
          width="122"
          height="28"
          viewBox="0 0 122 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M121 27H0.999997L27.6886 1"
            stroke="#4747FF"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- Strategic Account Executive (Full-time) -->
    <div
      class="section-inner career-content"
      v-if="$route.params.id === 'strategic-account-executive'"
    >
      <div class="career-content-title">
        <span>Strategic Account Executive (Full-time)</span>
        <!-- <button @click=";[(nowId = -1), onSelect(nowId)]">지원하기</button> -->
      </div>
      <div class="content-item">
        <div class="content-message">
          Zenerate has received multiple awards and funding to grow across the
          world. We are now looking for an enthusiastic full-time
          <strong>Strategic Account Executive</strong> to immediately join our
          new Downtown Los Angeles office as we’re expanding our operations in
          the States. We hope you’ll join our fast-growing, innovative company!
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.about_zenerate.name }}</div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.about_zenerate.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">
          {{ CAREERS.our_innovative_solution.name }}
        </div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.our_innovative_solution.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.who_we_are.name }}</div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.who_we_are.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.who_we_serve.name }}</div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.who_we_serve.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Key Responsibilities</div>
        <ul class="content-item-content">
          <li>
            Create and implement an outbound sales strategy for your initial
            region.
          </li>
          <li>
            Create a vision, mission, ICPs, and target market for Zenerate.
          </li>
          <li>
            Collaborate with the business development team to generate inbound
            leads.
          </li>
          <li>
            Build a strong pipeline and land at least 25 new accounts per
            period.
          </li>
          <li>Lead the expansion of Zenerate into other cities.</li>
          <li>Deliver your initial round of new sales.</li>
          <li>
            Deliver three times the number of new sales in the first three
            months.
          </li>
          <li>Collaborate with internal teams to execute rapid growth plan.</li>
          <li>
            Share important customer insights with US and international teams.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Requirements</div>
        <ul class="content-item-content">
          <li>
            Entrepreneurial team player, quick to adapt to changing situations
          </li>
          <li>
            Proven track record of lead & pipeline generation, meeting and
            surpassing sales quotas
          </li>
          <li>
            Minimum 5 years of SaaS / Software sales experience from
            multinational companies
          </li>
          <li>
            Strong listener with excellent presentation and closure skills
          </li>
          <li>Account planning and execution skills</li>
          <li>Eloquent & effective written, verbal, interpersonal skills</li>
          <li>
            Ability to build and mainatain professional relationships with
            C-level executives
          </li>
          <li>
            A passion for human-centered design and creative problem solving
          </li>
          <li>
            Must be highly self-motivated and able to work independently,
            proactively
          </li>
          <li>
            Be willing to wear multiple hats as the company grows and expands
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Ideal but not necessary</div>
        <ul class="content-item-content">
          <li>
            Experience in related industries: PropTech, real estate development,
            urban planning, construction, architecture
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Company benefits</div>
        <ul class="content-item-content">
          <li>Flexible work hours after the first 90-day period</li>
          <li>Professional development learning stipend</li>
          <li>Daily lunch stipend</li>
          <li>Cell phone reimbursement</li>
          <li>Travel reimbursement</li>
          <li>Health and wellness perks</li>
        </ul>
      </div>

      <div class="content-item">
        <div class="content-item-title">How to apply</div>
        <ul class="content-item-content">
          <li>
            Send resume and cover to
            <span class="email-highlight">apply@zenerate.ai</span>
          </li>
        </ul>
      </div>

      <button
        class="back-button"
        @click="
          ;[router.push({ path: '/career', query: getCurrentUtmQuery(router) })]
        "
      >
        <span>BACK</span>
        <svg
          width="122"
          height="28"
          viewBox="0 0 122 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M121 27H0.999997L27.6886 1"
            stroke="#4747FF"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- Business Development & Marketing Intern (Full-time) -->
    <div
      class="section-inner career-content"
      v-if="$route.params.id === 'business-development-marketing-intern'"
    >
      <div class="career-content-title">
        <span>Business Development & Marketing Intern (Full-time)</span>
        <!-- <button @click=";[(nowId = -1), onSelect(nowId)]">지원하기</button> -->
      </div>
      <div class="content-item">
        <div class="content-message">
          Zenerate has received multiple awards and funding to grow across the
          world. We are now looking for an enthusiastic full-time
          <strong>Business Development & Marketing Intern</strong> to
          immediately join our new Downtown Los Angeles office as we’re
          expanding our operations in the States. We hope you’ll join our
          fast-growing, innovative company!
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.about_zenerate.name }}</div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.about_zenerate.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">
          {{ CAREERS.our_innovative_solution.name }}
        </div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.our_innovative_solution.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.who_we_are.name }}</div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.who_we_are.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">{{ CAREERS.who_we_serve.name }}</div>
        <ul class="content-item-content">
          <li>
            {{ CAREERS.who_we_serve.content }}
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Key Responsibilities</div>
        <ul class="content-item-content">
          <li>
            Assist the business development team in maintaining up-to-date
            client contacts and company records in the CRM system.
          </li>
          <li>
            Manage CRM related changes to project status, design authorization,
            and purchase orders. Follow-up with project managers to update them
            on completed changes.
          </li>
          <li>
            Assist in the writing and review proposals for accurate content and
            consistent language and formatting to ensure the highest quality of
            proposal is submitted to the client.
          </li>
          <li>
            Assist the business development team in entering CRM information for
            prospective client targets.
          </li>
          <li>
            Follow-up on past due invoices and support business development and
            accounting in dispute resolution.
          </li>
          <li>
            Provide general sales support as needed. Tasks in this area can
            include: CRM training and maintenance, helping with document
            problems and mailings.
          </li>
          <li>Create/maintain sales reports.</li>
          <li>
            Maintain sales support materials including sales presentations,
            portfolio images and case studies.
          </li>
          <li>
            Maintain sales related document library including purchase orders,
            legal contracts, confidentiality agreements.
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Requirements</div>
        <ul class="content-item-content">
          <li>3 years previous administrative experience</li>
          <li>Minimum 2 years experience using a CRM system</li>
          <li>Proficiency in Google Suite, Microsoft Office</li>
          <li>
            Entrepreneurial team player, quick to adapt to changing situations
          </li>
          <li>
            Proven track record of lead & pipeline generation, meeting and
            surpassing sales quotas
          </li>
          <li>Eloquent & effective written, verbal, interpersonal skills</li>
          <li>
            A passion for human-centered design and creative problem solving
          </li>
          <li>
            Must be highly self-motivated and able to work independently,
            proactively
          </li>
          <li>
            Able to travel with business development team, whenever necessary
          </li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Ideal but not necessary</div>
        <ul class="content-item-content">
          <li>
            Experience in related industries: PropTech, real estate development,
            urban planning, construction, architecture
          </li>
          <li>SaaS / Software sales experience from multinational companies</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">Company benefits</div>
        <ul class="content-item-content">
          <li>Flexible work hours after the first 90-day period</li>
          <li>Professional development learning stipend</li>
          <li>Daily lunch stipend</li>
          <li>Health and wellness perks</li>
        </ul>
      </div>
      <div class="content-item">
        <div class="content-item-title">How to apply</div>
        <ul class="content-item-content">
          <li>
            Send resume and cover to
            <span class="email-highlight">apply@zenerate.ai</span>
          </li>
        </ul>
      </div>
      <button
        class="back-button hover-pointer"
        @click="
          ;[router.push({ path: '/career', query: getCurrentUtmQuery(router) })]
        "
      >
        <a href="#firstPage"> <span>BACK</span></a>
        <svg
          width="122"
          height="28"
          viewBox="0 0 122 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M121 27H0.999997L27.6886 1"
            stroke="#4747FF"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Store from '/Store/index'
import { getCurrentUtmQuery } from '/Utils/index'
import CAREERS from '/src/constants/careers.ts'

const fp = computed(() => Store.state.root.FullPage)
const router = useRouter()
onMounted(() => {
  fp.value.destroy()
  // fp.value.init('#fullpage', {
  //   // scrollOverflow: true,

  // })
})
const emit = defineEmits(['onSelect'])
const onSelect = (value) => {
  console.log(value)
  emit('onSelect', value)
}
const props = defineProps({
  id: {
    type: String,
    required: false,
  },
})
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}
const goToApply = () => {
  window.open(
    'https://docs.google.com/forms/d/1poAA0R2ZpVIgo22jaRwR3RmjIXZwKiZAoc7lusY2Gc4/viewform?edit_requested=true',
    '_blank'
  )
}
</script>
<style lang="scss" scoped>
.section-inner {
  height: auto !important;
  padding-bottom: 80px !important;
  padding-top: 160px !important;

  @include en-desktop {
    padding-top: 200px !important;
  }
}
.career-content-wrapper {
  height: 100%;
  max-width: 1600px;
  margin: auto;
  margin-top: 120px;

  @include en-mobile {
    max-width: 100%;
  }
  .career-content {
    .career-content-title {
      @include flex($justify: space-between);
      padding-bottom: 20px;
      border-bottom: solid 1px $grey-3;
      margin-bottom: 40px;
      @include tablet {
        padding-bottom: 14px;
      }
      @include mobile {
        padding-bottom: 12px;
      }
      span {
        @include bold(32);
        @include tablet {
          @include bold(30);
        }
        @include mobile {
          @include bold(20);
        }
      }
      button {
        margin: auto 0;
        color: white;
        width: 144px;
        height: 48px;
        border-radius: 100px;
        background-color: $main;
        @include tablet {
          width: 100px;
          height: 40px;
          @include medium(14);
        }
        @include mobile {
          width: 80px;
          height: 40px;
          @include medium(12);
        }
      }
    }
    .content-item {
      .content-message {
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 40px;
        color: rgba($black-1, 0.9);
        @include medium(18);
        @include tablet {
          @include medium(14);
        }
        @include mobile {
          @include medium(12);
        }
      }

      .content-item-title {
        @include bold(20);
        margin-bottom: 10px;
        @include tablet {
          @include bold(16);
        }
        @include mobile {
          @include bold(14);
        }
      }
      .content-item-content {
        list-style-type: disc;
        margin-left: 28px;
        margin-bottom: 40px;
        @include medium(16);
        color: rgba($black-1, 0.7);
        .caption-large {
          @include bold(16);
          line-height: 40px;
          @include tablet {
            @include bold(14);
          }
          @include mobile {
            @include bold(12);
          }
        }
        @include tablet {
          @include medium(14);
        }
        @include mobile {
          @include medium(12);
        }
      }
      .content-item-content-nolist {
        margin-left: 0px;
        @include tablet {
          p {
            margin-bottom: 12px;
          }
        }
        @include mobile {
          p {
            margin-bottom: 12px;
          }
        }
      }
    }
    .back-button {
      @include center-center;
      margin: 48px auto 6px auto;
      @include bold(16);
      span {
        padding-bottom: 5px;
      }
      color: $main;
      svg {
        position: absolute;
      }
      @include tablet {
        @include bold(14);
      }
      @include mobile {
        @include bold(14);
      }
    }

    .email-highlight {
      color: $navigation;
    }
  }
}
</style>
