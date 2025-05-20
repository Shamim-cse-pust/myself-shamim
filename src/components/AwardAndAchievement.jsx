import React from "react";

const AwardAndAchievement = () => {
  return (
    <section id="awards" className="awards common">
      <h2>Awards & Achievements</h2>
      <div className="awards-list">
        <div className="award-card">
          <h3>Dean's Award</h3>
          <div className="award-detail-row">
            <span className="award-year">2019-2021</span>
            <span className="award-desc">
              Dean's Award at Undergraduate Level
            </span>
          </div>
        </div>
        <div className="award-card">
          <h3>Undergraduate Scholarship</h3>
          <div className="award-detail-row">
            <span className="award-year">2018-2021</span>
            <span className="award-desc">
              Scholarship at PUST throughout four years based on merit
            </span>
          </div>
        </div>
        <div className="award-card">
          <h3>Programming Contest Champion</h3>
          <div className="award-detail-row">
            <span className="award-year">2023</span>
            <span className="award-desc">
              Champion, Solver Green Intra University Programming Contest
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardAndAchievement;
