'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const TIME_SLOTS_12H = ['9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm', '4:30pm'];
const TIME_SLOTS_24H = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

const Contact = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [is24Hour, setIs24Hour] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Calculate calendar days
  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startingDay = firstDay.getDay();
    const totalDays = lastDay.getDate();
    
    const days: (number | null)[] = [];
    
    // Add empty cells for days before the 1st
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add actual days
    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }
    
    return days;
  }, [currentMonth, currentYear]);

  // Check if a date is available (not in the past, not weekends)
  const isDateAvailable = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    return !isPast && !isWeekend;
  };

  // Check if a date is today
  const isToday = (day: number) => {
    return day === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear();
  };

  // Check if a date is selected
  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return day === selectedDate.getDate() && 
           currentMonth === selectedDate.getMonth() && 
           currentYear === selectedDate.getFullYear();
  };

  // Navigate months
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Handle date selection
  const handleDateSelect = (day: number) => {
    if (isDateAvailable(day)) {
      setSelectedDate(new Date(currentYear, currentMonth, day));
      setSelectedTime(null);
      setBookingConfirmed(false);
    }
  };

  // Handle time selection
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingConfirmed(false);
  };

  // Handle booking confirmation
  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsBooking(true);
      // Simulate booking API call
      setTimeout(() => {
        setIsBooking(false);
        setBookingConfirmed(true);
      }, 1500);
    }
  };

  // Format selected date for display
  const formatSelectedDate = () => {
    if (!selectedDate) return '';
    const dayName = DAYS[selectedDate.getDay()];
    return `${dayName.charAt(0)}${dayName.slice(1).toLowerCase()} ${selectedDate.getDate()}`;
  };

  const timeSlots = is24Hour ? TIME_SLOTS_24H : TIME_SLOTS_12H;

  return (
    <section className="relative py-16" id="contact">
      {/* CTA Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/40 to-black/60 py-10 px-8 md:py-14 md:px-12 text-center animate-on-scroll backdrop-blur-sm">
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-geist font-semibold tracking-tight text-white">
              Ready to stop leaving money on the table?
            </h2>
            <p className="mt-3 text-sm sm:text-base font-geist text-white/60">
              Let's see how we can fix the issues that are holding you back from driving more revenue today!
            </p>
            <div className="mt-6">
              <Link 
                href="#calendar"
                scroll={false}
                onClick={() => {
                  const calendarSection = document.getElementById('calendar');
                  if (calendarSection) {
                    calendarSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-geist bg-indigo-500 hover:bg-indigo-400 text-white transition-all duration-300 shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] hover:scale-[1.02] active:scale-[0.98] border border-indigo-400/30"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div id="calendar" className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-indigo-500/20 bg-black/60 backdrop-blur-sm overflow-hidden animate-on-scroll shadow-[0_0_60px_-15px_rgba(99,102,241,0.2)]">
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-[240px_1fr_220px] gap-6">
              {/* Left Panel - Meeting Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    S
                  </div>
                  <div>
                    <p className="text-indigo-300/70 text-xs font-geist">Softloftix Team</p>
                    <h3 className="text-lg font-semibold font-geist text-white">Project Scope Call</h3>
                  </div>
                </div>
                <p className="text-xs font-geist text-white/60 leading-relaxed">
                  Schedule a free discovery call with us! <span className="text-indigo-400">softloftix.com</span>
                </p>
                <div className="pt-3 space-y-2 border-t border-indigo-500/20">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-geist">30 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="font-geist">Google Meet</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="font-geist">Asia/Kolkata</span>
                  </div>
                </div>

                {/* Booking Confirmation */}
                {bookingConfirmed && selectedDate && selectedTime && (
                  <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                    <p className="text-xs font-geist text-green-400 font-medium">✓ Booking Confirmed!</p>
                    <p className="text-xs font-geist text-white/60 mt-1">
                      {MONTHS[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()} at {selectedTime}
                    </p>
                  </div>
                )}
              </div>

              {/* Center Panel - Calendar */}
              <div className="bg-indigo-950/30 border border-indigo-500/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-geist text-white">
                    {MONTHS[currentMonth]} <span className="text-white/50">{currentYear}</span>
                  </h4>
                  <div className="flex gap-1">
                    <button 
                      onClick={goToPrevMonth}
                      className="p-1.5 rounded-md hover:bg-indigo-500/20 text-white/50 hover:text-white transition"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={goToNextMonth}
                      className="p-1.5 rounded-md hover:bg-indigo-500/20 text-white/50 hover:text-white transition"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {/* Day Headers */}
                  {DAYS.map((day) => (
                    <div key={day} className="text-[10px] font-medium text-indigo-300/50 py-1 font-geist">
                      {day}
            </div>
                  ))}
                  
                  {/* Calendar Days */}
                  {calendarDays.map((day, index) => {
                    if (day === null) {
                      return <div key={`empty-${index}`} />;
                    }
                    
                    const available = isDateAvailable(day);
                    const selected = isSelected(day);
                    const todayDate = isToday(day);
                    
                    return (
                      <button
                        key={day}
                        onClick={() => handleDateSelect(day)}
                        disabled={!available}
                        className={`
                          aspect-square rounded-md text-xs font-geist transition-all relative
                          ${selected 
                            ? 'bg-indigo-500 text-white ring-1 ring-indigo-400/50 shadow-[0_0_10px_rgba(99,102,241,0.4)]' 
                            : available 
                              ? 'bg-indigo-950/50 text-white hover:bg-indigo-500/30 border border-indigo-500/10 hover:border-indigo-500/30 cursor-pointer' 
                              : 'text-white/20 cursor-not-allowed'
                          }
                        `}
                      >
                        {day}
                        {todayDate && !selected && (
                          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400" />
                        )}
                      </button>
                    );
                  })}
            </div>
              </div>

              {/* Right Panel - Time Slots */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-geist text-white">
                    {selectedDate ? formatSelectedDate() : 'Select a date'}
                  </h4>
                  <div className="flex gap-0.5 bg-indigo-950/50 border border-indigo-500/20 rounded-md p-0.5">
                    <button 
                      onClick={() => setIs24Hour(false)}
                      className={`px-2 py-0.5 text-[10px] font-geist rounded transition ${!is24Hour ? 'bg-indigo-500/30 text-white' : 'text-white/50 hover:text-white'}`}
                    >
                      12h
                    </button>
                    <button 
                      onClick={() => setIs24Hour(true)}
                      className={`px-2 py-0.5 text-[10px] font-geist rounded transition ${is24Hour ? 'bg-indigo-500/30 text-white' : 'text-white/50 hover:text-white'}`}
                    >
                      24h
                    </button>
                  </div>
                </div>
                
                {selectedDate ? (
                  <>
                    <div className="space-y-1.5 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`w-full py-2 px-3 rounded-lg border transition-all text-xs font-geist
                            ${selectedTime === time 
                              ? 'border-indigo-500 bg-indigo-500/30 text-white' 
                              : 'border-indigo-500/20 bg-indigo-950/30 hover:bg-indigo-500/20 hover:border-indigo-500/40 text-white'
                            }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    
                    {/* Confirm Button */}
                    {selectedTime && !bookingConfirmed && (
                      <button
                        onClick={handleBooking}
                        disabled={isBooking}
                        className="w-full py-2.5 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-geist text-xs font-semibold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isBooking ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Confirming...
                          </span>
                        ) : (
                          'Confirm Booking'
                        )}
                      </button>
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center h-[200px] text-white/40 text-xs font-geist">
                    Select a date to see available times
            </div>
                )}
              </div>
            </div>
          </div>
          </div>
        
        {/* Integration Note */}
        <p className="text-center mt-4 text-xs text-indigo-300/40 font-geist">
          Select a date and time that works for you
        </p>
      </div>
    </section>
  );
};

export default Contact;
