"use client";

import { useState, useEffect } from "react";
import WavyLines from "./WavyLines";

const AUTH_KEY = "cs-auth";
const PASSWORD = "sharon";

interface Props {
  company: string;
  title: string;
  children: React.ReactNode;
}

export default function PasswordGate({ company, title, children }: Props) {
  const [state, setState] = useState<"loading" | "locked" | "leaving" | "unlocked">("loading");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    setState(sessionStorage.getItem(AUTH_KEY) === "1" ? "unlocked" : "locked");
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pw.trim() === PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      setState("leaving");
      setTimeout(() => setState("unlocked"), 380);
    } else {
      setErr(true);
      setPw("");
    }
  }

  if (state === "loading") return null;
  if (state === "unlocked") return <>{children}</>;

  return (
    <main className={"gate" + (state === "leaving" ? " gate--unlock" : "")}>
      <WavyLines />
      <div className="gate__inner">
        <span className="gate__company">{company}</span>
        <h1 className="gate__title">{title}</h1>
        <p className="gate__sub">This case study is protected. Enter the password to continue.</p>
        <form className="gate__form" onSubmit={submit} autoComplete="off">
          <input
            type="password"
            className={"gate__input" + (err ? " gate__input--err" : "")}
            value={pw}
            onChange={(e) => { setPw(e.target.value); if (err) setErr(false); }}
            placeholder="Password"
            aria-label="Password"
            autoFocus
          />
          <button type="submit" className="btn btn--primary">
            <span className="t-btn">Unlock</span>
          </button>
        </form>
        {err && <p className="gate__err" role="alert">Incorrect password</p>}
      </div>
    </main>
  );
}
