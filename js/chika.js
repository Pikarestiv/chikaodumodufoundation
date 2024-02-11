document.getElementById("copyright-year").innerText = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  // Get the member parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const memberName = urlParams.get("member");

  const memberData = {
    chika: {
      fullName: "Chika Odumodu",
      image: "images/475x520_photo1.jpg",
      role: "Founder and CEO",
      bio: chikaBio,
      disableId: "chikaMember",
    },
    sam: {
      fullName: "Samuel Odumodu",
      image: "images/475x520_photo2.jpg",
      role: "Executive Director",
      bio: samBio,
      disableId: "samMember",
    },
    stella: {
      fullName: "Stella Odumodu",
      image: "images/475x520_photo3.jpg",
      role: "Vice Chair of Trustees",
      bio: stellaBio,
      disableId: "stellaMember",
    },
  };

  const mainImageElement = document.querySelector(".mad-entity-media img");
  const breakcrumbName = document.querySelector(
    ".mad-breadcrumb-path span.bName"
  );
  const headerName = document.querySelector(".mad-entity-content .mad-title");
  const roleName = document.querySelector(".mad-entity-content .mad-pre-title");
  const bioItem = document.querySelector("div.bio");
  const otherMembListItem = document.querySelector(".otherMembs");
  console.log("🚀 ~ otherMembListItem:", otherMembListItem);

  const resultArray = Object.keys(memberData).map((memberKey) => {
    if (memberKey === memberName) return;
    const { fullName, role, image } = memberData[memberKey];
    return memberTemplate(fullName, role, image, memberName);
  });
  const otherMembers = resultArray.join("");

  const { image, fullName, role, bio } = memberData[memberName];

  if (memberName && memberData.hasOwnProperty(memberName)) {
    mainImageElement.src = image;
    breakcrumbName.innerHTML = fullName;
    headerName.innerHTML = fullName;
    roleName.innerHTML = role;
    bioItem.innerHTML = bio;

    otherMembListItem.innerHTML = otherMembers;
  }
});

var chikaBio = `
<div class="content-element-4">
<p> Mr. Chika Odumodu is the Founder & CEO of Chika Odumodu Foundation; a 501(c) non profit organization involved in providing opportunities related to education in Nigeria specifically, and the broader continent of Africa. </p>
<p> Mr. Chika Odumodu has ten years experience in developing and managing large-scale asset management projects for the renewable, utility, downstream, midstream and upstream energy industries. He has proven to be a strategic resource on enterprise wide initiatives designed to manage scope, schedule, project budgets with a keen eye on risk, while demonstrating compliance, and extending the useful lives of assets.</p>
<p>Prior to starting his non-profit organization (NGO), Mr. Chika Odumodu worked straight out of college for DowDuPont Chemical Company in Houston and LaPorte, Texas where he worked as a Manufacturing Technology Engineer managing continuous improvement projects. Also worked for GP Strategies Corporation in Houston Texas, as an Operations Engineer supporting facilities projects for major oil & gas clients (Kuwait Oil Company, Kuwait National Petroleum Corporation) based in South & East Kuwait (Burgan Asset).</p>
</div>
<!-- <div class="content-element-4">
<div class="mad-list-content mad-fw-semi">
  <ul class="mad-list--icon">
    <li>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.<i
        class="icon material-icons-outlined">grade_outline</i>
    </li>
    <li>Aenean auctor wisi et urna. Aliquam erat volutpat. <i
        class="icon material-icons-outlined">grade_outline</i></li>
    <li>Duis ac turpis. Integer rutrum ante eu lacus.<i
        class="icon material-icons-outlined">grade_outline</i></li>
    <li>Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.<i
        class="icon material-icons-outlined">grade_outline</i></li>
  </ul>
</div>
</div> -->
<div class="content-element-6">
<p> He transitioned to TransCanada Corporation in Houston Texas, managing facilities maintenance and pipeline projects across the U.S. He was later acquired by ConocoPhillips Company in Houston Texas, where he successfully worked on a high profile fiberspar replacement project based out of Kennedy Texas (Eagle Ford Asset). After the success of that 2 year contract, He moved to Enbridge Corporation where He served in several senior positions as a Program Manager within the Gas Pipeline Project Management Team (MPUG) and Liquids Anomaly Maintenance PM Team in Houston Texas. Lastly </p>
<p>He successfully took a position as a Program Manager for EnLink Midstream, LLC in Dallas Texas managing high pressure natural gas pipeline projects out of Donaldsonville and Lake Charles, Lousianna. He is currently working as a Program Manager, Integrity & Data Management for EnServ Energy Services and Solutions, LLC in Houston Texas where he manages integrity management projects for their entire IMP department.</p>
<p>Mr. Chika Odumodu earned a Bachelor's Degree in Chemical Engineering from Prairie View Agricultural & Mechanical University in Houston, and a Post Graduate Diploma in Petroleum Production Engineering from Robert Gordon University based out of Aberdeen, Scotland. He complemented his technical educational background with a HBX Management Program from Harvard University.</p>
</div>
`;

var samBio = `
<div class="content-element-4">
<p>Mr. Samuel Odumodu is the Executive Director of The Chika Odumodu Foundation; a 501(c) non profit organization involved in providing opportunities related to education in Nigeria specifically, and the broader continent of Africa.</p>
<p>Mr Samuel Odumodu has 30 years experience managing geological projects both onshore and offshore in the oil & gas industry. He spent his entire career working for Shell Oil Company in Nigeria where he served in several positions in management leading geological and seismic projects until his retirement as Chief Petroleum Engineer & Head Subsurface in 1999. Mr. Samuel Odumodu later served as Managing Director in Prodecon and Director in Masurin Tec Limited in Nigeria.</p>
<p>Mr. Samuel Odumodu earned a Bachelor's Degree in Geology from the University of Ibadan in 1973.</p>
</div>
<!-- <div class="content-element-4">
<div class="mad-list-content mad-fw-semi">
  <ul class="mad-list--icon">
    <li>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.<i
        class="icon material-icons-outlined">grade_outline</i>
    </li>
    <li>Aenean auctor wisi et urna. Aliquam erat volutpat. <i
        class="icon material-icons-outlined">grade_outline</i></li>
    <li>Duis ac turpis. Integer rutrum ante eu lacus.<i
        class="icon material-icons-outlined">grade_outline</i></li>
    <li>Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.<i
        class="icon material-icons-outlined">grade_outline</i></li>
  </ul>
</div>
</div> -->
<!-- <div class="content-element-6">
<p> He transitioned to TransCanada Corporation in Houston Texas, managing facilities maintenance and pipeline projects across the U.S. He was later acquired by ConocoPhillips Company in Houston Texas, where he successfully worked on a high profile fiberspar replacement project based out of Kennedy Texas (Eagle Ford Asset). After the success of that 2 year contract, He moved to Enbridge Corporation where He served in several senior positions as a Program Manager within the Gas Pipeline Project Management Team (MPUG) and Liquids Anomaly Maintenance PM Team in Houston Texas. Lastly </p>
<p>He successfully took a position as a Program Manager for EnLink Midstream, LLC in Dallas Texas managing high pressure natural gas pipeline projects out of Donaldsonville and Lake Charles, Lousianna. He is currently working as a Program Manager, Integrity & Data Management for EnServ Energy Services and Solutions, LLC in Houston Texas where he manages integrity management projects for their entire IMP department.</p>
<p>Mr. Chika Odumodu earned a Bachelor's Degree in Chemical Engineering from Prairie View Agricultural & Mechanical University in Houston, and a Post Graduate Diploma in Petroleum Production Engineering from Robert Gordon University based out of Aberdeen, Scotland. He complemented his technical educational background with a HBX Management Program from Harvard University.</p>
</div> -->
`;

var stellaBio = `
<div class="content-element-4">
<p>Mrs. Stella Odumodu is the Vice Chair of Trustees for The Chika Odumodu Foundation; a 501(c) non profit organization involved in providing opportunities related to education in Nigeria specifically, and the broader continent of Africa.</p>
<p>Mrs. Stella Odumodu has 15 years experience managing business planning and budgeting processes of multiple oil and gas projects in the oil & gas industry. She spent her entire career working for Shell Oil Company in Nigeria where she served in several senior positions leading finance projects until her retirement as Senior Project Account in 2015. Mrs. Stella Odumodu currently serves as Director for Dumosis Nigeria Limited and Senior Project Accountant for Camp Construction Services based in Houston, Texas.</p>
<p>Mrs. Stella Odumodu earned a Bachelor's Degree in Accounting from Auchi Polytechnic, Nigeria and a Masters of Business Administration Degree (MBA) from American InterContinental University in 2017.</p>
</div>
<!-- <div class="content-element-4">
<div class="mad-list-content mad-fw-semi">
  <ul class="mad-list--icon">
    <li>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.<i
        class="icon material-icons-outlined">grade_outline</i>
    </li>
    <li>Aenean auctor wisi et urna. Aliquam erat volutpat. <i
        class="icon material-icons-outlined">grade_outline</i></li>
    <li>Duis ac turpis. Integer rutrum ante eu lacus.<i
        class="icon material-icons-outlined">grade_outline</i></li>
    <li>Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.<i
        class="icon material-icons-outlined">grade_outline</i></li>
  </ul>
</div>
</div> -->
<!-- <div class="content-element-6">
<p> He transitioned to TransCanada Corporation in Houston Texas, managing facilities maintenance and pipeline projects across the U.S. He was later acquired by ConocoPhillips Company in Houston Texas, where he successfully worked on a high profile fiberspar replacement project based out of Kennedy Texas (Eagle Ford Asset). After the success of that 2 year contract, He moved to Enbridge Corporation where He served in several senior positions as a Program Manager within the Gas Pipeline Project Management Team (MPUG) and Liquids Anomaly Maintenance PM Team in Houston Texas. Lastly </p>
<p>He successfully took a position as a Program Manager for EnLink Midstream, LLC in Dallas Texas managing high pressure natural gas pipeline projects out of Donaldsonville and Lake Charles, Lousianna. He is currently working as a Program Manager, Integrity & Data Management for EnServ Energy Services and Solutions, LLC in Houston Texas where he manages integrity management projects for their entire IMP department.</p>
<p>Mr. Chika Odumodu earned a Bachelor's Degree in Chemical Engineering from Prairie View Agricultural & Mechanical University in Houston, and a Post Graduate Diploma in Petroleum Production Engineering from Robert Gordon University based out of Aberdeen, Scotland. He complemented his technical educational background with a HBX Management Program from Harvard University.</p>
</div> -->
`;

var memberTemplate = (name, role, image, urlName) => `
  <div class="mad-col">
    <figure class="mad-team-member">
      <a href="pages_team_single.html?member=${urlName}" class="mad-team-member-photo"><img src="${image}"
          alt="" /></a>
      <figcaption class="mad-team-member-info">
        <div class="mad-info-header">
          <h5 class="mad-team-member-name">
            <a href="pages_team_single.html?member=${urlName}">${name}</a>
          </h5>
          <div class="mad-member-stat">${role}</div>
          <div class="mad-social-icons">
            <ul class="justify-content-center">
              <li>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
`;
