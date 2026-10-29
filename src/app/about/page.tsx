import {
  Avatar,
  Column,
  Heading,
  IconButton,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import { ScrollReveal, SkillBox, Timeline, IntroSection, WhatIDoCard } from "@/components";
import styles from "@/components/about/about.module.scss";
import React from "react";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: about?.title || "About",
    description: about?.description || "",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about?.title || "About")}`,
    path: about?.path || "/about",
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro?.title || "",
      display: about.intro?.display || false,
      items: [],
    },
    {
      title: "Work Experience",
      display: true,
      items: [],
    },
    {
      title: "What I Do",
      display: true,
      items: [],
    },
    {
      title: about.studies?.title || "",
      display: about.studies?.display || false,
      items: about.studies?.institutions?.map((institution) => institution.name) || [],
    },
    {
      title: about.technical?.title || "",
      display: about.technical?.display || false,
      items: about.technical?.skills?.map((skill) => skill.title) || [],
    },
  ];

  const timelineItems = about.work.experiences.map((job) => ({
    year: `${job.timeframe}${job.place ? ` · ${job.place}` : ""}`,
    title: job.role,
    company: job.company,
    description: "",
    points: job.achievements.filter((item): item is string => typeof item === "string"),
  }));

  const whatIDo = [
    {
      title: "Full-stack product features",
      description: "Next.js and React interfaces backed by Django or FastAPI and PostgreSQL.",
    },
    {
      title: "Business workflows",
      description: "CRM pipelines, HR modules, invoicing, and operational dashboards.",
    },
    {
      title: "API integration",
      description: "REST APIs, secure data handling, and reliable frontend-to-backend delivery.",
    },
    {
      title: "CMS platforms",
      description: "Payload CMS, translations, and admin tools for enterprise content.",
    },
    {
      title: "Enterprise interfaces",
      description: "Angular and React apps for alerts, signage, loyalty, and cashier systems.",
    },
    {
      title: "AI-assisted features",
      description: "OpenAI and fal.ai integrations for text, voice, video, and 3D workflows.",
    },
  ];

  return (
    <Column 
      maxWidth="m"
      style={{ 
        maxWidth: "100%",
        width: "100%",
        overflowX: "hidden",
        paddingLeft: "1rem",
        paddingRight: "1rem"
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about?.title || ""}
        description={about?.description || ""}
        path={about?.path || "/about"}
        image={`/api/og/generate?title=${encodeURIComponent(about?.title || "")}`}
        author={{
          name: person?.name || "",
          url: `${baseURL}${about?.path || "/about"}`,
          image: `${baseURL}${person?.avatar || ""}`,
        }}
      />
      {about.tableOfContent?.display && (
        <Column
          left="0"
          style={{ 
            top: "50%", 
            transform: "translateY(-50%)",
            maxWidth: "200px",
            overflow: "hidden"
          }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row 
        fillWidth 
        s={{ direction: "column" }} 
        horizontal="center"
        style={{ 
          maxWidth: "100%",
          width: "100%",
          overflowX: "hidden"
        }}
      >
        {about.avatar?.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
            style={{ width: "100%" }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "50%",
                padding: "4px",
                display: "inline-block",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                position: "relative",
                width: "168px",
                height: "168px",
              }}
            >
              <Image
                src={person.avatar}
                alt={person.name}
                width={160}
                height={160}
                className={styles.professionalAvatar}
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                  borderRadius: "50%",
                }}
                priority
                loading="eager"
              />
            </div>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={`language-${language}-${index}`} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40} style={{ width: "100%" }}>
          <IntroSection
            name={person?.name || ""}
            role={person?.role || ""}
            social={social || []}
          />

          <Column fillWidth gap="xl">
            {[
              about.intro?.display && (
                <Column key="intro-section" fillWidth>
                  <ScrollReveal delay={200} direction="up">
                    <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                      <Text variant="body-default-l" onBackground="neutral-weak">
                        I am a Full Stack Developer with experience building web applications, business platforms, and SaaS products. At Orbantis Technologies I work with Next.js, React, Tailwind CSS, Django, and PostgreSQL on HRMS, eCommerce, CRM, and CMS products. At 2B Innovations in Mohali I built enterprise interfaces in Angular, React, Next.js, and TypeScript for QComm, Digital Signage, Loyalty Program, and Cashier System. I focus on clear business workflows, reliable APIs, and interfaces teams can use every day.
                      </Text>
                    </Column>
                  </ScrollReveal>
                </Column>
              ),
              <Column key="journey-section" fillWidth gap="l" marginBottom="40">
                <ScrollReveal delay={100} direction="up">
                  <Heading as="h2" variant="display-strong-s" marginBottom="m" id="Work Experience">
                    Work Experience
                  </Heading>
                </ScrollReveal>
                <Timeline items={timelineItems} />
              </Column>,
              <Column key="what-i-do-section" fillWidth gap="l" marginBottom="40">
                <ScrollReveal delay={100} direction="up">
                  <Heading as="h2" variant="display-strong-s" marginBottom="m" id="what-i-do">
                    What I Do
                  </Heading>
                </ScrollReveal>
                <div 
                  style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
                    gap: "1.5rem" 
                  }}
                  className="what-i-do-grid"
                >
                  {whatIDo.map((item, index) => (
                    <ScrollReveal key={`what-i-do-${item.title}-${index}`} delay={index * 100} direction="up">
                      <WhatIDoCard
                        title={item.title}
                        description={item.description}
                        index={index}
                      />
                    </ScrollReveal>
                  ))}
                </div>
              </Column>,
              about.studies?.display && about.studies?.institutions && about.studies.institutions.length > 0 && (
                <Column key="studies-section" fillWidth gap="l" marginBottom="40">
                  <ScrollReveal delay={100} direction="up">
                    <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                      {about.studies.title}
                    </Heading>
                  </ScrollReveal>
                  <Column fillWidth gap="l">
                    {about.studies.institutions.map((institution, index) => (
                      <ScrollReveal key={`study-${institution.name}-${index}`} delay={index * 100} direction="left">
                        <div
                          style={{
                            background: "#fffdf9",
                            border: "1px solid #e6dfd4",
                            borderRadius: "16px",
                            padding: "1.5rem",
                          }}
                        >
                          <Text id={institution.name} variant="heading-strong-l" style={{ marginBottom: "0.5rem" }}>
                            {institution.name}
                          </Text>
                          <Text variant="heading-default-xs" onBackground="neutral-weak">
                            {institution.description}
                          </Text>
                        </div>
                      </ScrollReveal>
                    ))}
                  </Column>
                </Column>
              ),
              about.technical?.display && about.technical?.skills && about.technical.skills.length > 0 && (
                <Column key="technical-section" fillWidth gap="m" marginBottom="40">
                  <ScrollReveal delay={100} direction="up">
                    <Heading
                      as="h2"
                      id={about.technical.title}
                      variant="display-strong-s"
                      marginBottom="m"
                    >
                      {about.technical.title}
                    </Heading>
                  </ScrollReveal>
                  <Column fillWidth gap="m">
                    {about.technical.skills.map((skill, index) => (
                      <SkillBox
                        key={`skill-${skill.title}-${index}`}
                        title={skill.title}
                        description={skill.description}
                        tags={skill.tags || []}
                        index={index}
                      />
                    ))}
                  </Column>
                </Column>
              ),
            ].filter(Boolean)}
          </Column>
        </Column>
      </Row>
    </Column>
  );
}
