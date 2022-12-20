import React from 'react';
import Layout from "../../components/Layouts/Layout";
import styles from '../../styles/TermsAndConditions.module.css'


export default function PrivacyPolicy() {
    return (
        <div className = {styles.wrapper}>

            <h1>
                Privacy Policy
            </h1>
            <div>
            <p>
                Beacon Tutors Pakistan aims to provide a secure medium and guarantees to preserve student/ parent/
                client, tutor/ teacher/ resource, and freelancer privacy. We feel humbled and acknowledge the
                responsibility we are allocated with by our worthy students/ parents/ clients, tutors/ teachers/
                resources, and freelancers to support and provide a secure exchange of information.
            </ p>
            <p>
                In doing so, it is of paramount importance that all parties build trust by effectively protecting the
                privacy of each other.
            </ p>
            <p>
                We ensure to execute prudent and responsible management with careful use of student/ parent/ client,
                tutor/ teacher/ resource, and freelancer personal information using encrypted data and compliance with
                the correct protocols.
            </ p>
            <ul>
                <li>
                    We will not share your ID card/ CNIC picture or details with any individual, public platform, or
                    third party. It is only required for the verification of the identity and to confirm the
                    authenticity through NADRA (National Database and Registration Authority). However, the company has
                    the right to use it only if any violation or illicit activity is reported about the tutor/ teacher/
                    resource.
                </ li>
                <li>
                    We will not share your picture used for registration with any student/ parent/ client, tutor/
                    teacher/ resource, or freelancer. Any kind of data in our database is highly secure and encrypted.
                </ li>
                <li>
                    We will not share any kind of contact information/ details of any tutor/ teacher/ resource, student/
                    parent/ client or freelancer with any third party without the permission/ consent of the concerned
                    individual. The academic and professional information will be shared only when the tutor/ teacher/
                    resource or freelancer will apply for a specific vacancy.
                </ li>
                <li>
                    We add tutors/ teachers/ resources to WhatsApp groups to update them with the latest vacancies. If
                    any member of the group tries to contact another member privately, it is advised to immediately
                    report this issue so that the company can take requisite action. It can result in the cancellation
                    of registration with Beacon Tutors Pakistan, and the ID card/ CNIC can be permanently blocked from
                    all platforms and communication mediums.
                </ li>
                <li>
                    It is instructed that all registered members, students/ parents/ clients, tutors/ teachers/
                    resources, and freelancers do not share any kind of information of another registered member/
                    individual of Beacon Tutors Pakistan on any private or public channel as it violates the agreement
                    and will
                    <div>
                        result in the forthwith suspension of account/ cancellation of registration and permanent
                        blacklisting of your ID card/ CNIC.
                    </ div>
                </ li>
                <li>
                    It is instructed not to take screenshots, share, or forward any kind of information with any third
                    party that was exchanged between a company representative and a student/ parent/ client, tutor/
                    teacher/ resource, or a freelancer.
                </ li>
                <li>
                    If an online lecture is delivered, then students/ parents/ clients or tutors/ teachers/ resources
                    cannot record that lecture. We advise students/ parents/ clients to take notes during the lecture
                    and ask the tutors/ teachers/ resources to go over that specific topic if the student/ parent/
                    client fails to understand any topic/ concept in the first attempt.
                </ li>
            </ ul>
            </div>
        </div>
    );
}

PrivacyPolicy.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

