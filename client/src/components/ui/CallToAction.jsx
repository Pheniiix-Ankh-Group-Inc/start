import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="text-center mt-12">
      <Link to="/appointment" className="btn btn-primary text-white text-lg px-8 py-3 hover:shadow-lg transition duration-300">
        Book a Call
      </Link>
    </div>
  );
}

export default CallToAction;