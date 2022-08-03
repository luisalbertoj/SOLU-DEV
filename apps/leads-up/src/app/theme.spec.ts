import { ThemeConfig } from "./theme.config";
import { PrimeNGConfig } from 'primeng/api';
import { TestBed } from "@angular/core/testing";
describe('ThemeConfig', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
      providers: [PrimeNGConfig],
    })
  );
  it('config default theme', () => {
    const comp: ThemeConfig = new ThemeConfig(TestBed.get(PrimeNGConfig));
    expect(comp.menuMode).toBe('sidebar');
    expect(comp.layout).toBe('blue');
    expect(comp.ripple).toBe(true);
    expect(comp.colorScheme).toBe('dark');

  });
});
