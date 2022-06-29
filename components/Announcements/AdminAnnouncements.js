import AdminAnnouncement from '../Announcement/AdminAnnouncement';

export default function AdminAnnouncements(props) {
  return (
    <div className="adminSection">
      <h1 className="adminHeading">All Announcements</h1>
      <div className="adminList">
        {props.announcements?.map((announcement) => (
          <AdminAnnouncement key={announcement.id} announcement={announcement} />
        ))}
      </div>
    </div>
  );
}
