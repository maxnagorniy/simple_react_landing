import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.857387082942!2d30.522883250348002!3d50.46027545274487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7668a9ea4ccb2e58!2z0JzQsNC60JTQvtC90LDQu9GM0LTQtw!5e0!3m2!1suk!2sua!4v1539796263830"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
                title="Map"
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    )
};

export default Location;