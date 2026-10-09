import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Database, LineChart, ShieldCheck } from "lucide-react";

import Head from "next/head";

export default function Website() {
  return (
    <>
      <Head>
        <title>Nth‑i Datalab | Nth‑Level Data Analytics & AI</title>
        <meta name="description" content="Nth‑i Datalab delivers advanced data analytics, AI, and business intelligence to unlock nth‑level insights." />
      </Head>

    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="px-6 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Turning Data into <span className="text-emerald-600">Nth‑Level Insights</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Nth‑i Datalab helps organizations mine, model, and multiply value from data using
            advanced analytics and AI‑driven intelligence.
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="rounded-2xl px-6">Get Started</Button>
            <Button variant="outline" className="rounded-2xl px-6">Contact Us</Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <div className="h-72 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl shadow-lg" />
        </motion.div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Our Services</h2>
          <p className="text-center text-slate-600 mt-3">End‑to‑end analytics tailored to your business</p>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[{
              icon: <Database className="h-8 w-8 text-blue-600" />, title: "Data Engineering", desc: "Robust pipelines, clean data, scalable architecture."
            },{
              icon: <LineChart className="h-8 w-8 text-emerald-600" />, title: "Advanced Analytics", desc: "Predictive, prescriptive, and diagnostic models."
            },{
              icon: <BarChart3 className="h-8 w-8 text-blue-600" />, title: "BI & Dashboards", desc: "Clear, decision‑ready visual intelligence."
            },{
              icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />, title: "Data Governance", desc: "Security, quality, and compliance by design."
            }].map((s, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  {s.icon}
                  <h3 className="mt-4 font-semibold text-xl">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Industries We Serve</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6 text-slate-700">
            {["Finance", "Healthcare", "Retail", "Manufacturing", "Energy", "Telecom", "Public Sector", "Startups"].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm font-medium">{i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Why Nth‑i Datalab</h2>
          <p className="mt-6 text-lg text-slate-600">
            We go beyond surface‑level metrics. Our philosophy is to extract the Nth layer of
            intelligence from your data—where real competitive advantage lives.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Talk to Our Experts</h2>
          <p className="mt-4 opacity-90">Tell us about your data challenges</p>
          <form className="mt-10 grid gap-4">
            <input className="p-3 rounded-xl text-slate-900" placeholder="Your Name" />
            <input className="p-3 rounded-xl text-slate-900" placeholder="Email Address" />
            <textarea className="p-3 rounded-xl text-slate-900" rows={4} placeholder="How can we help?" />
            <Button variant="secondary" className="rounded-2xl px-8">Submit</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-slate-900 text-slate-400 text-center">
        <p>© {new Date().getFullYear()} Nth‑i Datalab. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}
