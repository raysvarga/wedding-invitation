import { useState } from 'react';

export default function Reservasi() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guestCount: 1,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert('Terima kasih telah melakukan reservasi!');
    setFormData({
      name: '',
      email: '',
      attendance: '',
      guestCount: 1,
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-12 bg-sage-100">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-sage-600 mb-8">Reservasi Kehadiran</h2>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sage-600 mb-2" htmlFor="name">Nama Lengkap</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sage-600 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sage-600 mb-2">Apakah Anda akan hadir?</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-sage-500"
                  required
                />
                <span className="ml-2">Ya</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === 'no'}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-sage-500"
                />
                <span className="ml-2">Tidak</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sage-600 mb-2" htmlFor="guestCount">Jumlah Tamu</label>
            <input
              type="number"
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sage-600 mb-2" htmlFor="message">Pesan (Opsional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-sage-500 text-white py-2 px-4 rounded-md hover:bg-sage-600 transition duration-300"
          >
            Kirim Reservasi
          </button>
        </form>
      </div>
    </div>
  );
}
