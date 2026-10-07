import { describe, expect, it } from 'vitest';
import { formatTime, weekKey, weeklyStats, type Session } from '../lib/pikup';
const session = (verdict: Session['verdict'], date='2026-10-07T12:00:00', seconds=3600): Session => ({id:Math.random().toString(),date,seconds,verdict,worked:'Work',intention:'Next',previousIntention:verdict?'Previous':null});
describe('Pikup weekly notebook',()=>{
 it('starts the week on Monday and puts Sunday in the preceding week',()=>{expect(weekKey(new Date('2026-10-07T12:00:00'))).toBe('2026-10-05');expect(weekKey(new Date('2026-10-11T12:00:00'))).toBe('2026-10-05');expect(weekKey(new Date('2026-10-12T12:00:00'))).toBe('2026-10-12');});
 it('counts every hour but only explicit checks in follow-through',()=>{const stats=weeklyStats([session(null),session('yes'),session('partially'),session('no')],'2026-10-05');expect(stats.hours).toBe(4);expect(stats.judged).toBe(3);expect(stats.yes).toBe(1);});
 it('resets weekly hours, growth, and streak milestones',()=>{const stats=weeklyStats([session('yes','2026-10-04T12:00:00'),session('yes'),session('yes'),session('yes'),session('no'),session('yes')],'2026-10-05');expect(stats.yes).toBe(4);expect(stats.best).toBe(3);expect(stats.hours).toBe(5);expect(weeklyStats([session('yes')],'2026-10-12').yes).toBe(0);});
 it('formats a count-up stopwatch without a 24-hour rollover',()=>{expect(formatTime(3661)).toEqual(['01','01','01']);expect(formatTime(90000)).toEqual(['25','00','00']);});
});