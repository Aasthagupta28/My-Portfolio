import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";

import {
  Background,
  Column,
  Flex,
  Meta,
  opacity,
  RevealFx,
  SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers, PageTransition } from "@/components";
import { baseURL, effects, fonts, style, dataStyle, home, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    "viz-style": dataStyle.variant,
                  })};

                  ['theme','neutral','brand','accent','solid','solid-style','border','surface','transition','scaling'].forEach(function(key) {
                    localStorage.removeItem('data-' + key);
                  });

                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  root.setAttribute('data-theme', 'light');
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              email: `mailto:${person.email}`,
              telephone: "+91-8219469104",
              address: {
                "@type": "PostalAddress",
                streetAddress: "VPO Sajaopiplu",
                addressLocality: "Mandi",
                addressRegion: "Himachal Pradesh",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/Aasthagupta28",
                "https://www.linkedin.com/in/aastha-gupta-a42037218",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Angular",
                "Django",
                "FastAPI",
                "Python",
                "PostgreSQL",
                "Payload CMS",
                "REST APIs",
                "Tailwind CSS",
              ],
            }),
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ 
            minHeight: "100vh",
            overflowX: "hidden",
            maxWidth: "100vw",
            width: "100%"
          }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex 
            zIndex={0} 
            fillWidth 
            padding="l" 
            horizontal="center" 
            flex={1}
            style={{ 
              maxWidth: "100vw", 
              overflowX: "hidden",
              width: "100%"
            }}
          >
            <Flex 
              horizontal="center" 
              fillWidth 
              minHeight="0"
              style={{ 
                maxWidth: "100%", 
                overflowX: "hidden",
                width: "100%"
              }}
            >
              <RouteGuard>
                <PageTransition>{children}</PageTransition>
              </RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
