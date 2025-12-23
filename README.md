ML Mondays – Content Platform
📌 Overview

ML Mondays is a content-driven web platform designed to publish articles related to Machine Learning, AI, and emerging technologies.
The project uses a CMS-based workflow that allows writers to create and manage content without touching code or repository files.

The primary goal of this project is to provide a smooth, non-technical writing experience while maintaining structured content storage and version control.

🌐 Live Website

Website: https://mlmondays26.netlify.app

Admin (CMS): https://mlmondays26.netlify.app/admin

✍️ Content Writing Workflow
Accessing the CMS

Open the CMS dashboard:
👉 https://mlmondays26.netlify.app/admin

Log in using an authorized account

After login, the content dashboard loads automatically

Access is restricted to ensure only approved writers can publish content.

Creating a New Article

Navigate to Blog Posts

Click New Blog Post

Fill in the required fields:

Title

Body (Markdown editor)

Save the post

The CMS automatically handles file creation and storage.

🗂 Content Management

Articles are stored in Markdown format

Content is organized in a structured folder system

Version control ensures content safety and history tracking

Once published, content appears on the live site after deployment.

🧱 Tech Stack

Frontend: Static site architecture

CMS: Decap CMS

Hosting: Netlify

Authentication: Netlify Identity & Git Gateway

Content Format: Markdown (.md)

Repository: GitHub

📁 Project Structure (Relevant)
public/
 └── admin/
     ├── index.html
     └── config.yml

content/
 └── posts/
     └── *.md

🔐 Access Control

CMS access is limited to authorized users

Writers do not require direct GitHub or code access

Authentication ensures controlled publishing

This keeps the platform secure while remaining writer-friendly.

🚧 Ongoing Enhancements

The core CMS workflow and content publishing system are fully operational.
Additional internal improvements are being explored to further streamline authentication handling and long-term scalability.

These enhancements do not impact the current publishing experience.

✅ Project Status

CMS dashboard: Available

Blog creation: Working

Content publishing: Stable

Writer experience: Simple and intuitive
