"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

type AboutStat = {
  label: string;
  value: string;
};

type AboutValue = {
  title: string;
  description: string;
};

type AboutMilestone = {
  year: string;
  title: string;
  description: string;
};

export default function AboutUsPage() {
  const { t } = useTranslation("common");
  const stats = t("aboutUs.stats", {
    returnObjects: true,
  }) as AboutStat[];
  const values = t("aboutUs.values", {
    returnObjects: true,
  }) as AboutValue[];
  const milestones = t("aboutUs.milestones", {
    returnObjects: true,
  }) as AboutMilestone[];

  const leadership = [
    {
      image: "/john.png",
      name: t("team.members.john.name"),
      title: t("team.members.john.title"),
      quote: t("team.members.john.quote"),
    },
    {
      image: "/zizi.png",
      name: t("team.members.zizi.name"),
      title: t("team.members.zizi.title"),
      quote: t("team.members.zizi.quote"),
    },
    {
      image: "/lim.png",
      name: t("team.members.lim.name"),
      title: t("team.members.lim.title"),
      quote: t("team.members.lim.quote"),
    },
    {
      image: "/maza.png",
      name: t("team.members.maza.name"),
      title: t("team.members.maza.title"),
      quote: t("team.members.maza.quote"),
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white pb-16">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8 md:p-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                {t("aboutUs.badge")}
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                Ozone
              </p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{t("aboutUs.title")}</h1>
              <p className="mt-2 text-sm text-white/75">{t("aboutUs.subtitle")}</p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-teal-300/70 hover:text-teal-100"
            >
              {t("aboutUs.backHome")}
            </Link>
          </div>

          <p className="mb-8 max-w-4xl text-sm leading-7 text-white/85 sm:text-base">
            {t("aboutUs.intro")}
          </p>

          <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center"
              >
                <p className="text-2xl font-bold text-cyan-200 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/70 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <section className="rounded-2xl border border-teal-300/25 bg-teal-300/10 p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-teal-100">{t("aboutUs.visionTitle")}</h2>
            <p className="mt-2 text-sm leading-7 text-white/85 sm:text-base">
              {t("aboutUs.visionText")}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{t("aboutUs.valuesTitle")}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-black/25 p-5"
                >
                  <h3 className="text-lg font-semibold text-teal-100">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {t("aboutUs.milestonesTitle")}
            </h2>
            <div className="mt-5 space-y-3">
              {milestones.map((milestone) => (
                <div
                  key={`${milestone.year}-${milestone.title}`}
                  className="rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {milestone.year}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-teal-100">{milestone.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/80">{milestone.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{t("aboutUs.teamTitle")}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {leadership.map((member) => (
                <article
                  key={member.name}
                  className="rounded-2xl border border-white/10 bg-black/25 p-4"
                >
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-white/15">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 text-center text-base font-semibold text-teal-100">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-center text-xs text-white/65">{member.title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/80">"{member.quote}"</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-teal-300/25 bg-teal-300/10 p-4 sm:p-5">
            <h2 className="text-lg font-semibold text-teal-100">{t("aboutUs.contactTitle")}</h2>
            <p className="mt-2 text-sm leading-7 text-white/85 sm:text-base">
              {t("aboutUs.contactDescription")}
            </p>
            <a
              href="mailto:marketing.admin@ocglobaltech.com"
              className="mt-2 inline-block text-sm font-semibold text-cyan-200 underline underline-offset-2 hover:text-cyan-100 sm:text-base"
            >
              marketing.admin@ocglobaltech.com
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
