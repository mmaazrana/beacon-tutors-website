import AdminAnnouncement from '../Announcement/AdminAnnouncement';

export default function AdminAnnouncements(props) {
  return (
    <div className="adminSection">
      <h1 className="adminHeading">All Announcements</h1>
      <div className="adminList">
        {props.announcements?.map((announcement, index) => (
          <AdminAnnouncement key={index} announcement={announcement} />
        ))}
      </div>
    </div>
  );
}
