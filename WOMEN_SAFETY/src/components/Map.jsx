import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const cameraIcon = L.divIcon({
    className: '',
    html: `<div style="font-size:24px;filter:drop-shadow(0 0 6px #00e5ff);cursor:pointer">🎥</div>`,
    iconAnchor: [12, 12],
});

const userIcon = L.divIcon({
    className: '',
    html: `<div style="width:14px;height:14px;background:#4f8ef7;border:2px solid white;border-radius:50%;box-shadow:0 0 8px #4f8ef7"></div>`,
    iconAnchor: [7, 7],
});

function RecenterMap({ position }) {
    const map = useMap();
    useEffect(() => { map.setView(position, 15); }, [position]);
    return null;
}

function SafetyMap() {
    const [userPos, setUserPos] = useState(null);
    const [cameras, setCameras] = useState([]);
    const defaultPos = [30.7046, 76.7179]; // fallback: Chandigarh

    useEffect(() => {
        if (!navigator.geolocation) { setUserPos(defaultPos); return; }
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                const pos = [coords.latitude, coords.longitude];
                setUserPos(pos);
                setCameras([
                    { id: 1, pos: [pos[0] + 0.003, pos[1] + 0.004], label: 'Camera 1 - Main Chowk' },
                    { id: 2, pos: [pos[0] - 0.002, pos[1] + 0.006], label: 'Camera 2 - Bus Stand' },
                    { id: 3, pos: [pos[0] + 0.005, pos[1] - 0.003], label: 'Camera 3 - Market Area' },
                    { id: 4, pos: [pos[0] - 0.004, pos[1] - 0.005], label: 'Camera 4 - Park Entry' },
                    { id: 5, pos: [pos[0] + 0.001, pos[1] + 0.008], label: 'Camera 5 - School Road' },
                ]);
            },
            (err) => { console.warn('Geolocation error:', err.message); setUserPos(defaultPos); },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    }, []);

    const center = userPos || defaultPos;

    return (
        <>
            <div className="relative group space-y-10">
                <h1 className="text-4xl font-bold text-[#914722] pb-4 mt-8">
                    Track the Cameras !!
                </h1>
                <span className="absolute bottom-0 left-2 w-1/5 h-2 bg-[#394f6e] rounded-xl transition-all duration-500 ease-in-out group-hover:w-1/3"></span>
            </div>

            <MapContainer
                className="shadow-2xl r"
                center={center}
                zoom={15}
                style={{ height: '500px', width: '100%', boxShadow: "0 0 20px 20px #394f6e"}}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {userPos && <RecenterMap position={userPos} />}

                {/* User location marker */}
                {userPos && (
                    <Marker position={userPos} icon={userIcon}>
                        <Popup>📍 <strong>You are here</strong></Popup>
                    </Marker>
                )}

                {/* Sample camera markers */}
                {cameras.map(cam => (
                    <Marker key={cam.id} position={cam.pos} icon={cameraIcon}>
                        <Popup>📷 <strong>{cam.label}</strong><br />Status: <span style={{color:'#4caf50'}}>● Active</span></Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
}

export default SafetyMap;