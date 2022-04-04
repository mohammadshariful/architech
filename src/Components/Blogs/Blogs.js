import React from "react";
import { Container } from "react-bootstrap";
import { FaComment, FaThumbsUp } from "react-icons/fa";
import authorImg from "../../Assets/Images/author-img.jpg";
import blockInlineImg from "../../Assets/Images/block-inline.webp";
import contextApi from "../../Assets/Images/context-api.jpg";
import semanticTagImg from "../../Assets/Images/semantic-tag.jpg";
import "./Blogs.css";
const Blogs = () => {
  return (
    <Container className=" my-5 p-3">
      <article className="blog">
        <h4 className="fw-bolder mb-3">Title : কন্টেক্সট এপিআই </h4>
        <div className="px-3">
          <img className="blog-img img-fluid" src={contextApi} alt="" />
          <p className="text-start my-3">
            কন্টেক্সট এপিআই হলো একটা প্যার্টান যে প্যাটার্নে সাহায্যে কোন
            কম্পনেন্ট এ প্রপস ড্রিলিং ছাড়া ডাটাকে যে কোন লেভেলে পাঠানো যায়।
            রিয়েক্ট এর ক্রিয়েট কন্টেক্সট ফাংশন কল করে কন্টেক্সট এপিআই তৈরি করা
            হয়। এ ফাংশন দুইটি কম্পনেন্ট রিটার্ন করে ১.কন্টেক্সট প্রোভাইডার
            ২.কন্টেক্সট কনজ্যুমার। যে কম্পনেন্ট ডাটার দরকার সেসব কম্পোনেন্টগুলো
            কে কন্টেক্সট প্রোভাইডার দ্বারা রেপ করে দেয়া হয়। এ কম্পনেন্ট এ
            ভ্যালু নামক প্রপসের ভিতর যেকোনো ধরনের ডাটা পাঠানো যায়। আর যখন কোন
            কম্পোনেন্টের ডাটার দরকার হয় সে কম্পোনেন্টগুলো কে কন্টেক্সট কনজ্যুমার
            দ্বারা রেপ করা হয়।
          </p>
        </div>
        <div className="d-flex align-items-center px-3">
          <img className="author-img" src={authorImg} alt="" />
          <h6 className="ms-2">Mohammad Shariful</h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-muted px-3">Mar 30. 5 min read</p>
          <p className="text-muted px-3">
            <span className="me-2">
              <FaThumbsUp /> <small>1027</small>
            </span>
            <span className="ms-2">
              <FaComment /> <small>40</small>
            </span>
          </p>
        </div>
      </article>
      <article className="blog">
        <h4 className="fw-bolder mb-3">Title :সিমেন্টিক ট্যাগ </h4>
        <div className="px-3">
          <img className="blog-img img-fluid" src={semanticTagImg} alt="" />
          <p className="text-start my-3">
            সিমেন্টিক বলতে যে ট্যাগ গুলোর পরিপূর্ণ অর্থ রয়েছে যা দ্বারা ব্রাউজার
            এবং ডেভেলপার সহজে বুঝতে পারে। নন-সিমেন্টিক ট্যাগ গুলো দ্বারা কোন
            কিছু বুঝা যেত না কোনটা কি কাজ করছে।যেমন div,span এই গুলো দ্বারা কোন
            কিছু বুঝা যায় না। সিমেন্টিক ট্যাগ গুলোর মধ্যে
            header,main,section,article,aside,footer etc. এই গুলো দেখেই সহজে
            বুঝা যায় কোনটা কি কাজ করছে।
          </p>
        </div>
        <div className="d-flex align-items-center px-3">
          <img className="author-img" src={authorImg} alt="" />
          <h6 className="ms-2">Mohammad Shariful</h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-muted px-3">Apr 8. 7 min read</p>
          <p className="text-muted px-3">
            <span className="me-2">
              <FaThumbsUp /> <small>567</small>
            </span>
            <span className="ms-2">
              <FaComment /> <small>28</small>
            </span>
          </p>
        </div>
      </article>
      <article className="blog">
        <h4 className="fw-bolder mb-3">
          Title : ব্লক এলিমেন্ট ,ইনলাইন এলিমেন্ট ,ইনলাইন-ব্লক
        </h4>
        <div className="px-3">
          <img className="blog-img img-fluid" src={blockInlineImg} alt="" />
          <p className="text-start my-3">
            ব্লক এলিমেন্ট -= ব্লক লেভেল এলিমেন্ট গুলো নতুন লাইনে শুরু হয় এবং
            পুরো প্রস্থ দখল করে নেয়।এইগুলোর দৈর্ঘ্য এবং প্রস্থ সেট করা যায়। যেমন
            div,p,h1,ul,hr etc,
            <br />
            <br />
            ইনলাইন এলিমেন্ট -= ইনলাইন এলিমেন্ট গুলো নতুন লাইনে শুরু হয় না।এটি
            তার প্রয়োজনীয় জায়গায় দখল করে। এটির দৈর্ঘ্য এবং প্রস্থ সেট করা যায়
            না। যেমন a,span,small,img etc.
            <br />
            <br />
            ইনলাইন-ব্লক-= ইনলাইন-ব্লক লেভেল এলিমেন্ট গুলোতে ইনলাইন এলিমেন্ট এর
            ফরমেট রয়েছে। এদের ডিসপ্লে প্রোপার্টি ইনলাইন-ব্লক সেট করতে হয়। এটি
            নতুন করে লাইন শুরু করে না কিন্তু দৈর্ঘ্য এবং প্রস্থ সেট করা যায়।
          </p>
        </div>
        <div className="d-flex align-items-center px-3">
          <img className="author-img" src={authorImg} alt="" />
          <h6 className="ms-2">Mohammad Shariful</h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-muted px-3">June 20. 10 min read</p>
          <p className="text-muted px-3">
            <span className="me-2">
              <FaThumbsUp /> <small>987</small>
            </span>
            <span className="ms-2">
              <FaComment /> <small>20</small>
            </span>
          </p>
        </div>
      </article>
    </Container>
  );
};

export default Blogs;
