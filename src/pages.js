import React from "react";
import {Link, useLocation, Outlet} from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>[Company Website]</h1>
      <Link to="about">About</Link>
      <Link to="events">Events</Link>
      <Link to="contact">Contact</Link>
    </>
  );
}

export function About() {
    return (
      <>
        <h1>[About]</h1>
        <Outlet />
      </>
    );
  }

  export function Services(){
      return (
          <div>
              <h2>Our Services</h2>
          </div>
      )
  }
  export function CompanyHistory(){
    return (
        <div>
            <h2>Company History</h2>
        </div>
    )
  }
  export function Location(){
    return (
        <div>
            <h2>Our Location</h2>
        </div>
    )
}
  export function Events() {
    return (
      <>
        <h1>[Events]</h1>
      </>
    );
  }

  export function Contact() {
    return (
      <>
        <h1>[Contact]</h1>
      </>
    );
  }

    export function NotFound() {
        let location = useLocation();

    return (
      <>
        <h1>[404]</h1>
        <p>Resource not found at {location.pathname}</p>
      </>
    );
  }