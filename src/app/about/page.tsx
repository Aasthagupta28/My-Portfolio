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
      title: "My Journey",
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

  const timelineItems = [
    {
      year: "2024 - Present",
      title: "Junior Frontend Developer",
      company: "2B Innovations Pvt. Ltd. (Mohali)",
      description:
        "Developed and maintained multiple web applications including QComm and Digital Signage. Rebuilt QComm using Next.js and React, improving performance and scalability. Created 6 custom client-facing websites using WordPress.",
    },
    {
      year: "2023",
      title: "Front End Developer Intern",
      company: "2B Innovations Pvt. Ltd. (Mohali)",
      description:
        "Worked on real-time Loyalty Program project. Built responsive UI using Bootstrap 5, CSS, and Angular. Implemented APIs and handled dynamic data binding. Gained hands-on experience in teamwork and real-time project workflows.",
    },
  ];

  const whatIDo = [
    {
      title: "Build product-grade UI",
      description: "Creating scalable and maintainable user interfaces",
    },
    {
      title: "Integrate APIs",
      description: "Seamless backend integration and real-time data handling",
    },
    {
      title: "Real-time dashboards",
      description: "Building high-performance monitoring and control systems",
    },
    {
      title: "Responsive design",
      description: "Mobile-first approach for all devices and screen sizes",
    },
    {
      title: "Testing and debugging",
      description: "Ensuring quality delivery across all platforms",
    },
  ];

  return (
    <Column maxWidth="m">
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
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
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
                        Hi, I'm Aastha — a Frontend Developer passionate about building scalable UI systems, 
                        real-time dashboards, and seamless user experiences.
                      </Text>
                    </Column>
                  </ScrollReveal>
                </Column>
              ),
              <Column key="journey-section" fillWidth gap="l" marginBottom="40">
                <ScrollReveal delay={100} direction="up">
                  <Heading as="h2" variant="display-strong-s" marginBottom="m" id="my-journey">
                    My Journey
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
                            background: "rgba(99, 102, 241, 0.05)",
                            border: "1px solid rgba(99, 102, 241, 0.2)",
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
                <Column key="technical-section" fillWidth gap="l" marginBottom="40">
                  <ScrollReveal delay={100} direction="up">
                    <Heading
                      as="h2"
                      id={about.technical.title}
                      variant="display-strong-s"
                      marginBottom="40"
                    >
                      {about.technical.title}
                    </Heading>
                  </ScrollReveal>
                  <Column fillWidth gap="l">
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
