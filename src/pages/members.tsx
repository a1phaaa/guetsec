import React from 'react';
import Layout from '@theme/Layout';
import members from '../data/members.data';
import TeamMemberProfileCard from '../components/TeamMemberProfileCard';

function MemberList() {
  return (
    <div className="row text--center">
      {members.map(member => {
        return (
        <TeamMemberProfileCard
          key={member.name}
          className={'col col--3 margin-bottom--md'}
          name={member.name}
          avatar={member.avatar}
          children={member.description}
          blogUrl={member.blogUrl}
        />);
      })}
    </div>
  );
}

function MembersWall() {
    return (
      <Layout title="团队成员">
        <main>
          <div className="text--center margin-vert--lg">
            <h1>团队成员</h1>
            <p>这里不仅有团队成员，也有志同道合的朋友们</p>
          </div>
          <div className="container">
            <MemberList />
          </div>
          <div className="text--center margin-vert--lg">
            <p>
              期待大家的加入！
            </p>
          </div>
        </main>
      </Layout>
    );
  }
  
  export default MembersWall;